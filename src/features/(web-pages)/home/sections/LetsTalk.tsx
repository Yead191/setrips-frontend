import React from "react";
import { ArrowRight } from "lucide-react";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

const LetsTalk = () => {
    return (
        <section className="pb-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-[#F8F9FA] rounded-xl py-16 px-8 md:px-16 lg:px-24 max-w-6xl mx-auto shadow-sm">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl md:text-5xl font-normal text-[#292F36] leading-[1.2] max-w-3xl mx-auto ${lato.className}`}>
                            Your destination deserves the best ride. Let&apos;s talk
                        </h2>
                    </div>

                    <form className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="w-full bg-transparent border-b border-[#D1D1D1] py-4 outline-none focus:border-primary transition-colors peer text-lg"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
                                >
                                    Name
                                </label>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="w-full bg-transparent border-b border-[#D1D1D1] py-4 outline-none focus:border-primary transition-colors peer text-lg"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
                                >
                                    Email
                                </label>
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                id="interest"
                                placeholder=" "
                                className="w-full bg-transparent border-b border-[#D1D1D1] py-4 outline-none focus:border-primary transition-colors peer text-lg"
                            />
                            <label
                                htmlFor="interest"
                                className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm"
                            >
                                Hello I am Interested in..
                            </label>
                        </div>

                        <div className="flex justify-center pt-8">
                            <button
                                type="submit"
                                className="bg-[#0057A8] hover:bg-[#004A8F] text-white px-10 py-5 rounded-md flex items-center gap-3 text-lg font-medium transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200"
                            >
                                Send Now <ArrowRight size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LetsTalk;
