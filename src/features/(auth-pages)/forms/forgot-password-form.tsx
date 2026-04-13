"use client";

import { ArrowLeft } from "lucide-react";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";

interface ForgotPasswordFormProps {
  onSwitch: (view: "signin" | "otp") => void;
}

export function ForgotPasswordForm({ onSwitch }: ForgotPasswordFormProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onSwitch("signin")}
          className="flex items-center gap-2 text-sm text-primary hover:underline w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </button>
        <h2 className="text-2xl font-semibold text-foreground mt-4">Forgot Password</h2>
        <p className="text-sm text-muted-foreground">Enter your email and we'll send you an OTP to reset your password.</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onSwitch("otp"); }}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="forgot-email">Email</Label>
          <Input id="forgot-email" type="email" placeholder="Enter your email" className="bg-[#eff6ff] border-none h-12" />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold mt-4">
          Send OTP
        </Button>
      </form>
    </div>
  );
}
