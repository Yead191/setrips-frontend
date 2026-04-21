"use client"
import { Button } from "../../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { AgentSignupModal } from "@/features/(auth-pages)/components/AgentSignupModal";

const BannerButton = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div>
            {
                pathname === "/" ? (
                    <div className=" flex items-center gap-5">
                        <Button
                            size="lg"
                            className="mt-4 bg-primary text-white font-normal h-14 px-8 text-lg rounded-none hover:bg-transparent hover:text-primary hover:border hover:border-primary transition-all duration-300 "
                        >
                            Book Now
                        </Button>
                        <Button
                            size="lg"
                            className="mt-4 border border-primary bg-transparent hover:bg-primary hover:text-white text-primary font-normal h-14 px-8 text-lg rounded-none transition-all "
                            onClick={() => router.push("/our-car")}
                        >
                            Our car
                        </Button>

                    </div>
                ) : (
                    <AgentSignupModal
                        trigger={
                            <Button
                                size="lg"
                                className="bg-[#C5A02E] text-white font-normal h-14 px-8 rounded-md transition-all shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95 uppercase"
                            >
                                Apply Now
                            </Button>
                        }
                    />
                )
            }
        </div>
    );
};
export default BannerButton;