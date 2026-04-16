"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/fleet-banner.png",
  "/fleet-banner.png",
  "/fleet-banner.png",
  "/fleet-banner.png",
];

export const VehicleGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
        <Image
          src={images[activeImage]}
          alt="Premium Sedan"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
              activeImage === index
                ? "border-blue-600 ring-2 ring-blue-100"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
