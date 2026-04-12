
import Image from "next/image";
import { AuthSwitcher } from "./auth-switcher";

export function AuthContainer() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[600px] w-full bg-white overflow-hidden rounded-lg">
      {/* Left Side: Illustration */}
      <div className="hidden lg:flex lg:w-[55%] bg-[#f8fafc] p-10 flex-col relative justify-between">
        <div>

          <div className="mt-12 space-y-6">
            <h1 className="text-[48px] font-medium text-[#2E3032] leading-tight">
              Welcome to Premium Ground Transportation
            </h1>
            <p className="text-[#474D66] text-lg leading-relaxed ">
              By creating an account, you will gain access to seamless ride bookings, priority corporate services, secure online payments, and real-time journey management.
            </p>
          </div>
        </div>

        <div className="relative w-full h-80 ">
          <Image
            src="/auth-img.png"
            alt="Authentication Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Side: Forms */}
      <div className="w-full lg:w-[45%] flex items-center justify-center bg-white">
        <AuthSwitcher />
      </div>
    </div>
  );
}
