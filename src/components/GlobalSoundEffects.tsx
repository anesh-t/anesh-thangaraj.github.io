import { useEffect } from "react";
import { playClickSound } from "@/lib/sounds";

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

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
};

export default GlobalSoundEffects;
