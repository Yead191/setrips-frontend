"use client";
import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-81px)]  gap-4 w-full bg-transparent rounded-xl">
      {/* Logo with scale animation */}
      <div className="scale-pulse">
        <Image
          src={"/logo.png"}
          alt="Setrips Logo"
          width={600}
          height={600}
          unoptimized
          priority
          className="w-fit h-20 lg:h-[200px] object-contain"
        />
      </div>

      {/* Custom animation style */}
      <style jsx>{`
        @keyframes scalePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .scale-pulse {
          animation: scalePulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Spinner;