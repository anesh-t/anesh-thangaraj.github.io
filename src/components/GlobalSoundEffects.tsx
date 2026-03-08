import { useEffect } from "react";
import { playClickSound, playHoverSound } from "@/lib/sounds";

/**
 * Attaches subtle click & hover sounds to all interactive elements globally.
 * Render once near the app root.
 */
const GlobalSoundEffects = () => {
  useEffect(() => {
    const interactiveSelector =
      'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]), .cursor-pointer';

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        playClickSound();
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest(interactiveSelector);
      if (el && !(el as any).__soundHovered) {
        (el as any).__soundHovered = true;
        playHoverSound();
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest(interactiveSelector);
      if (el) {
        (el as any).__soundHovered = false;
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
    };
  }, []);

  return null;
};

export default GlobalSoundEffects;
