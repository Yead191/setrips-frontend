import BannerButton from "./BannerButton";
import { BannerForm } from "./BannerForm";
import Image from "next/image";


interface BannerProps {
  backgroundImage: string;
  title: string;
  description: string;
  showButton?: boolean;
  isLanding?: boolean;
}

export function Banner({
  backgroundImage,
  title,
  description,
  showButton = false,
  isLanding = false,
}: BannerProps) {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] lg:h-[calc(100vh-80px)] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          width={1600}
          height={1000}
          className="object-cover object-center h-full w-full"
          priority
        />
        <div className="absolute inset-0  lg:bg-[#00000066]/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-0 h-full flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-20">
        {/* Left Content */}
        <div className={`w-full lg:w-1/2 flex flex-col items-start gap-4 md:gap-6 lg:gap-8  animate-in fade-in slide-in-from-left-4 duration-700 ${isLanding ? "text-[#3B3B3B] " : "text-white"}`}>
          <div className="space-y-4">
            <span className={`text-[#C5A02E]  tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base ${isLanding ? "text-[#C5A02E]" : "text-[#C5A02E]"}`}>
              Excellence in Motion
            </span>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight ${isLanding ? "font-medium" : "font-normal"}`}>
              {title}
            </h1>
          </div>

          <p className={`text-sm sm:text-base md:text-lg   max-w-xl leading-relaxed ${isLanding ? "text-[#656565]" : "text-[#D4D4D4]"}`}>
            {description}
          </p>

          {showButton && (
            <BannerButton />
          )}
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <BannerForm />
        </div>
      </div>
    </section>
  );
}
