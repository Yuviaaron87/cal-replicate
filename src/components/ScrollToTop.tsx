import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent browser from restoring the previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always start the page from the top after a refresh
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return null;
}