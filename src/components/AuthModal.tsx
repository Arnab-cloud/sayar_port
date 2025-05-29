import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

interface AuthModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSuccess?: () => void;
}

export default function AuthModal({
	isOpen,
	onClose,
	onSuccess,
}: AuthModalProps) {
	const { signInWithGoogle, currentUser } = useAuth();

	const handleGoogleSignIn = async () => {
		try {
			await signInWithGoogle();
		} catch (error) {
			console.error("Google sign in failed:", error);
		}
	};

	// Close modal and call onSuccess when user signs in
	useEffect(() => {
		if (currentUser && isOpen) {
			if (onSuccess) {
				onSuccess();
			} else {
				onClose();
			}
		}
	}, [currentUser, isOpen, onClose, onSuccess]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black/60 backdrop-blur-sm"
				onClick={onClose}
				aria-hidden="true"
			></div>
			<div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
				<div className="p-6">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">
							Sign In to Access Full Profile
						</h3>
						<button
							onClick={onClose}
							className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
							aria-label="Close"
						>
							<i className="ri-close-line text-xl"></i>
						</button>
					</div>

					<p className="text-gray-600 dark:text-gray-400 mb-6">
						Sign in with your Google account to unlock the full
						profile, download resources, and get personalized
						content.
					</p>

					<div className="space-y-4">
						<button
							onClick={() => {
								console.log("Button clicked in signin pop up");
								handleGoogleSignIn();
							}}
							className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
							type="button"
							role="button"
							tabIndex={0}
						>
							<div className="flex items-center justify-center">
								<img
									src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
									alt="Google"
									className="w-5 h-5 mr-3"
									onError={(e) => {
										e.currentTarget.src =
											"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E";
									}}
								/>
								<span className="text-gray-800 dark:text-gray-200 font-medium">
									Sign in with Google
								</span>
							</div>
						</button>

						<div className="relative flex items-center justify-center">
							<div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
							<span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-sm">
								or
							</span>
							<div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
						</div>

						<button
							onClick={onClose}
							className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
						>
							Continue as Guest
						</button>
					</div>

					<div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
						<div className="flex items-start">
							<i className="ri-shield-check-line text-primary-600 dark:text-primary-500 mr-3 text-xl mt-0.5"></i>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Your information is securely handled in
								accordance with our privacy policy. We'll send
								you a personalized badge as a token of
								appreciation.
							</p>
						</div>
					</div>
				</div>

				<div className="bg-gray-50 dark:bg-gray-800 p-4">
					<div className="flex items-center">
						<div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
							SB
						</div>
						<div className="ml-3">
							<p className="text-sm font-medium text-gray-900 dark:text-white">
								Sayar Basu
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								AI/ML Engineer & GenAI Specialist
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
