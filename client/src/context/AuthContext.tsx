import { createContext, useState, useEffect, ReactNode } from "react";
import {
	User,
	onAuthStateChanged,
	signOut as firebaseSignOut,
	signInWithPopup,
	getRedirectResult,
} from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface AuthContextProps {
	currentUser: User | null;
	isLoading: boolean;
	signInWithGoogle: () => Promise<void>;
	signOut: () => Promise<void>;
	handleRedirectResult: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
	currentUser: null,
	isLoading: true,
	signInWithGoogle: async () => {},
	signOut: async () => {},
	handleRedirectResult: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { toast } = useToast();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setIsLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const signInWithGoogle = async () => {
		try {
			console.log("Starting Google sign-in process with popup");
			console.log("Firebase config:", {
				apiKey: import.meta.env.VITE_FIREBASE_API_KEY
					? "Set"
					: "Not set",
				projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
					? "Set"
					: "Not set",
				appId: import.meta.env.VITE_FIREBASE_APP_ID ? "Set" : "Not set",
			});

			// Configure Google provider
			googleProvider.setCustomParameters({
				prompt: "select_account",
			});

			// Using popup method instead of redirect
			const result = await signInWithPopup(auth, googleProvider);
			console.log("Popup sign-in successful", result);

			// If sign-in successful, send badge email
			if (result.user) {
				const { user } = result;
				console.log("User signed in:", user.email);

				try {
					await apiRequest("POST", "/api/send-badge", {
						email: user.email,
						name: user.displayName,
						photoURL: user.photoURL,
					});

					toast({
						title: "Welcome!",
						description:
							"You've successfully signed in. Check your email for a special badge!",
					});
				} catch (emailError) {
					console.error("Error sending badge email:", emailError);
					// Don't fail the sign-in if email fails
					toast({
						title: "Welcome!",
						description: "You've successfully signed in!",
					});
				}
			} else {
				console.log("Error sigining in");
			}
		} catch (error: any) {
			console.error("Error signing in with Google:", error);

			let errorMessage =
				"Failed to sign in with Google. Please try again.";
			if (error.code === "auth/popup-blocked") {
				errorMessage =
					"Please allow popups for this website to sign in with Google.";
			} else if (error.code === "auth/popup-closed-by-user") {
				errorMessage = "Sign-in was cancelled. Please try again.";
			} else if (error.code === "auth/cancelled-popup-request") {
				errorMessage = "Sign-in was cancelled. Please try again.";
			}

			toast({
				title: "Sign In Failed",
				description: errorMessage,
				variant: "destructive",
			});
		}
	};

	const signOut = async () => {
		try {
			await firebaseSignOut(auth);
			toast({
				title: "Signed Out",
				description: "You have been successfully signed out.",
			});
		} catch (error) {
			console.error("Error signing out:", error);
			toast({
				title: "Sign Out Failed",
				description: "Failed to sign out. Please try again.",
				variant: "destructive",
			});
		}
	};

	// Keep this for compatibility, but we're using popup now
	const handleRedirectResult = async () => {
		try {
			const result = await getRedirectResult(auth);
			if (result) {
				// User just signed in - send email with badge
				const { user } = result;
				await apiRequest("POST", "/api/send-badge", {
					email: user.email,
					name: user.displayName,
					photoURL: user.photoURL,
				});

				toast({
					title: "Welcome!",
					description:
						"You've successfully signed in. Check your email for a special badge!",
				});
			}
		} catch (error) {
			console.error("Error handling redirect result:", error);
		}
	};

	const value = {
		currentUser,
		isLoading,
		signInWithGoogle,
		signOut,
		handleRedirectResult,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
