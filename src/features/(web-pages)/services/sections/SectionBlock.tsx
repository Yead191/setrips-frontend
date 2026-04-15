import Image from "next/image";
import SectionTitle from "@/shared/SectionTItle";

interface SectionBlockProps {
    title: string;
    description: string;
    image: string;
    index?: number; // controls direction: even = image left, odd = image right
}

/**
 * Reusable two-column block: image on one side, text on the other.
 * Alternates direction based on `index` (even = row, odd = row-reverse).
 */
const SectionBlock: React.FC<SectionBlockProps> = ({
    title,
    description,
    image,
    index = 0,
}) => {
    const isReversed = index % 2 !== 1;

    return (
        <div
            className={`flex flex-col gap-10 lg:gap-16 items-center ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
        >
            {/* Image */}
            <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative w-full aspect-4/3 overflow-hidden rounded-sm">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center rounded-3xl lg:rounded-[48px]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        draggable={false}
                    />
                </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <SectionTitle title={title} align="left" className="mb-6" />
                <p className="text-gray-600 text-base lg:text-lg leading-[30px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SectionBlock;
