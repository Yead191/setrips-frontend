"use client";

import { useState } from "react";
import { SignInForm } from "../features/(auth-pages)/forms/sign-in-form";
import { SignUpForm } from "../features/(auth-pages)/forms/sign-up-form";
import { ForgotPasswordForm } from "../features/(auth-pages)/forms/forgot-password-form";
import { OtpForm } from "../features/(auth-pages)/forms/otp-form";
import { ResetPasswordForm } from "../features/(auth-pages)/forms/reset-password-form";

export type AuthView = "signin" | "signup" | "forgot-password" | "otp" | "reset-password";

export function AuthSwitcher() {
  const [view, setView] = useState<AuthView>("signin");

  const handleSwitch = (newView: AuthView) => {
    setView(newView);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center p-6 md:p-10 lg:p-16">
      {view === "signin" && <SignInForm onSwitch={handleSwitch} />}
      {view === "signup" && <SignUpForm onSwitch={handleSwitch} />}
      {view === "forgot-password" && <ForgotPasswordForm onSwitch={handleSwitch} />}
      {view === "otp" && <OtpForm onSwitch={handleSwitch} />}
      {view === "reset-password" && <ResetPasswordForm onSwitch={handleSwitch} />}
    </div>
  );
}
