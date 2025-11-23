"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ThreeDCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  linkText?: string;
  linkHref?: string;
}

export function ThreeDCardDemo({ title, description, image, buttonText, buttonLink, linkText = "IEEE 2025", linkHref = "#" }: ThreeDCardProps) {
  return (
    <div className="dark">
      <CardContainer className="w-[19vw] inter-var mb-[-5vw]">
        <CardBody className="w-[19vw] bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#2b2b2b]  w-full max-w-[26rem] h-auto rounded-md p-6 border">
          <CardItem translateZ="50" className="text-xl font-medium text-neutral-600 dark:text-white">{title}</CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">{description}</CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img src={image} alt="thumbnail" className="w-[19vw] h-auto max-h-[50vh] object-contain group-hover/card:shadow-xl" />
          </CardItem>
          <div className="flex justify-between items-center mt-6">
            {linkText && <CardItem translateZ={20} as="a" href={linkHref} target="_blank" className="px-4 py-2 rounded-md text-xs font-medium dark:text-white">{linkText}</CardItem>}
            <CardItem translateZ={20} as="a" href={buttonLink} target="_blank" className="px-4 py-2 rounded-md bg-black dark:bg-white dark:text-black text-white text-xs font-bold">{buttonText}</CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
