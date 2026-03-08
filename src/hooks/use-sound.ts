import { useCallback } from "react";
import { playClickSound, playHoverSound } from "@/lib/sounds";

export function useSoundEvents() {
  const onHover = useCallback(() => playHoverSound(), []);
  const onClick = useCallback(() => playClickSound(), []);
  return { onHover, onClick };
}
