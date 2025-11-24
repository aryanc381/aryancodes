"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  title: string;
  image: string; // image URL
};

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset;
  const SCALE_FACTOR = scaleFactor;

  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    interval = setInterval(() => {
      setCards((prev) => {
        const copy = [...prev];
        copy.unshift(copy.pop()!);
        return copy;
      });
    }, 2250);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="relative mx-auto">
    {cards.map((card, index) => (
      <motion.div
        key={card.id}
        className="absolute bg-white text-neutral-800 rounded-md p-4 shadow-lg border border-neutral-300 flex flex-col items-center justify-start"
        style={{
          transformOrigin: "top center",
          width: "30vw",   // customize card width here
          height: "30vw",  // customize card height here
        }}
        animate={{
          top: index * -CARD_OFFSET,
          scale: 1 - index * SCALE_FACTOR,
          zIndex: cards.length - index,
        }}
      >
        {/* Title */}
        <h2 className="text-neutral-900 text-lg font-semibold text-center mb-3">
          {card.title}
        </h2>

        {/* Image */}
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={card.image}
            alt={card.title}
            className="w-42 h-42 md:w-[25vw] md:h-auto object-contain rounded-md"
          />
        </div>
      </motion.div>
    ))}
  </div>
);
};
