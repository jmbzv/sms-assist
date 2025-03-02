"use client";

import { ChevronRight } from "lucide-react";

export function Banner() {
  return (
    <div className="relative top-0 bg-black py-3 text-white md:py-0 border-b border-white/20">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <span className="text-sm font-bold leading-loose">разработен от А.Джамбазов</span>
      </div>
    </div>
  );
}
