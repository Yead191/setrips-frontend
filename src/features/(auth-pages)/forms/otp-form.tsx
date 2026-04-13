"use client";

import { ArrowLeft } from "lucide-react";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";

interface OtpFormProps {
  onSwitch: (view: "forgot-password" | "reset-password") => void;
}

export function OtpForm({ onSwitch }: OtpFormProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onSwitch("forgot-password")}
          className="flex items-center gap-2 text-sm text-primary hover:underline w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h2 className="text-2xl font-semibold text-foreground mt-4">OTP Verification</h2>
        <p className="text-sm text-muted-foreground">We have sent a 4-digit code to your email. Enter it below to verify.</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onSwitch("reset-password"); }}>
        <div className="flex flex-col gap-2">
          <Label>Verification Code</Label>
          <div className="grid grid-cols-4 gap-4 mt-2">
            {[1, 2, 3, 4].map((i) => (
              <Input
                key={i}
                type="text"
                maxLength={1}
                className="bg-[#eff6ff] border-none h-14 text-center text-xl font-bold"
              />
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold mt-4">
          Verify OTP
        </Button>
      </form>
    </div>
  );
}
