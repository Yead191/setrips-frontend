import { Button } from "../../ui/button";
import { BannerForm } from "./BannerForm";
import Image from "next/image";


interface BannerProps {
  backgroundImage: string;
  title: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
}

export function Banner({
  backgroundImage,
  title,
  description,
  showButton = false,
  buttonText = "Explore Our Fleet",
}: BannerProps) {
  return (
    <section className="relative min-h-[700px] lg:h-[calc(100vh-80px)] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0  lg:bg-[#00000066]/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-0 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 lg:gap-8 text-white animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="space-y-4">
            <span className="text-[#C5A02E]  tracking-[0.2em] uppercase text-sm md:text-base">
              Excellence in Motion
            </span>
            <h1 className="text-5xl md:text-6xl leading-[1.1] tracking-tight">
              {title}
            </h1>
          </div>

          <p className="text-lg  text-[#D4D4D4] max-w-xl leading-relaxed ">
            {description}
          </p>

          {showButton && (
            <Button
              size="lg"
              className="mt-4 bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg rounded-full transition-all shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95"
            >
              {buttonText}
            </Button>
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
