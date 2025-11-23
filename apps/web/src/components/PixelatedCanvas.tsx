"use client";
import { PixelatedCanvas } from "../components/ui/pixelated-canvas";

export function PixelatedCanvasDemo() {
  return (
    <div className="flex pr-[2vw] p-[1vw] items-center">
      <PixelatedCanvas
        src="https://assets.aceternity.com/manu-red.png"
        width={450}
        height={450}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor="#ffffffff"
        dropoutStrength={0.4}
        interactive
        distortionStrength={3}
        distortionRadius={80}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#000000ff"
        tintStrength={0.2}
        className="rounded-md"
      />
    </div>
  );
}