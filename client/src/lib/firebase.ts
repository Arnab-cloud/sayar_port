import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-key",
	authDomain: `${projectId}.firebaseapp.com`,
	projectId,
	storageBucket: `${projectId}.appspot.com`,
	appId: import.meta.env.VITE_FIREBASE_APP_ID || "demo-app-id",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
