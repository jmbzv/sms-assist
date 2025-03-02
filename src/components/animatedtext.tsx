"use client"
import { ChevronRight } from "lucide-react";

import { cn } from "../components/lib/utils";
import AnimatedGradientText from "./animatedgradienttext";

export function AnimatedGradientTextDemo() {
  return (
    <div className="z-10 flex -mt-9 items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r font-bold from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
         100% БЕЗПЛАТЕН ПЛЪГИН
        </span>
      </AnimatedGradientText>
    </div>
  );
}
