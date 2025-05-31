import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

function ScrollToTopOnProjects() {
	const [location] = useLocation();
	const prevLocation = useRef(location);

	useEffect(() => {
		if (location === "/projects" && prevLocation.current !== "/projects") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
		prevLocation.current = location;
	}, [location]);

	return null;
}

export default ScrollToTopOnProjects;
