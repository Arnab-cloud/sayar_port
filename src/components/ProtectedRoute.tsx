import { useEffect } from "react";
import { useLocation, Redirect } from "wouter";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { currentUser } = useAuth();
	const [, setLocation] = useLocation();

	useEffect(() => {
		if (!currentUser) {
			setLocation("/");
		}
	}, [currentUser, setLocation]);

	if (!currentUser) {
		return <Redirect to="/" />;
	}

	return <>{children}</>;
}

export default ProtectedRoute;
