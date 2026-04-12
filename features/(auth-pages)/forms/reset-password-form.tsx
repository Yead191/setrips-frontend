"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { ArrowLeft } from "lucide-react";

interface ResetPasswordFormProps {
  onSwitch: (view: "signin" | "otp") => void;
}

export function ResetPasswordForm({ onSwitch }: ResetPasswordFormProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => onSwitch("otp")}
          className="flex items-center gap-2 text-sm text-primary hover:underline w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h2 className="text-2xl font-semibold text-foreground mt-4">Reset Password</h2>
        <p className="text-sm text-muted-foreground">Please enter your new password below.</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onSwitch("signin"); }}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" placeholder="Enter new password" className="bg-[#eff6ff] border-none h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" placeholder="Confirm new password" className="bg-[#eff6ff] border-none h-12" />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold mt-4">
          Reset Password
        </Button>
      </form>
    </div>
  );
}
