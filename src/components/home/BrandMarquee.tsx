"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logosTop = [
    "/assets/images/home/brands/brand1.png",
    "/assets/images/home/brands/brand2.png",
    "/assets/images/home/brands/brand3.png",
    "/assets/images/home/brands/brand4.png",
    "/assets/images/home/brands/brand6.png",
    "/assets/images/home/brands/brand7.png",

];


// Small logo card component
const LogoCard = ({ src }: { src: string }) => {
    return (
        <div className="mx-6 md:mx-10 lg:mx-20 flex items-center justify-center">
            <Image
                src={src}
                className="w-fit h-[80px] md:h-[100px] lg:h-[132px] object-contain  hover:grayscale-0 transition cursor-pointer"
                alt="logo"
                width={300}
                height={200}
                draggable={false}
            />
        </div>
    );
};
export default function BrandMarquee() {
    return (
        <div className="w-full bg-[#F9F9F9] py-14 my-12">
            {/* Top Row- left */}
            <Marquee
                pauseOnHover={true}
                speed={50}
                gradient={true}
                autoFill
                direction="left"
            >
                {logosTop?.map((src, i) => (
                    <LogoCard key={i} src={src} />
                ))}
            </Marquee>
        </div>
    );
}
