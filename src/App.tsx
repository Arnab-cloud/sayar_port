import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AllProjects from "@/pages/AllProjects";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

function Router() {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/projects" component={AllProjects} />
			<Route component={NotFound} />
		</Switch>
	);
}

function App() {
	const { handleRedirectResult } = useAuth();

	useEffect(() => {
		// Handle firebase auth redirect result when page loads
		handleRedirectResult();
	}, [handleRedirectResult]);

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Router />
			</TooltipProvider>
		</QueryClientProvider>
	);
}

export default App;