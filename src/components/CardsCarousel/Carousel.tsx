import Image from "next/image";
import React from "react";

const cards = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
  { id: 5, text: "Card 5" },
  { id: 6, text: "Card 6" },
  { id: 7, text: "Card 7" },
  { id: 8, text: "Card 8" },
  { id: 9, text: "Card 9" },
  { id: 10, text: "Card 10" },
];

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-scroll flex w-max">
        {/* Duplicate list to make it seamless */}
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="mx-4 flex-shrink-0 items-start justify-center rounded-lg shadow-lg flex flex-col gap-1"
          >
            <Image src="/images/one.avif" alt="" width={100} height={100} className="rounded-lg" />
            <p className="text-gray-400 text-xs">Kontrol...</p>
            <p className="text-brand-800 font-bold text-base">KSH.91,312</p>
          </div>
        ))}
      </div>
    </div>
  );
}
