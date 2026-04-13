"use client";

import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { Label } from "../../../../ui/label";
import { FacebookIcon, GoogleIcon } from "@/components/brands";

interface SignUpFormProps {
  onSwitch: (view: "signin") => void;
}

export function SignUpForm({ onSwitch }: SignUpFormProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-foreground">Create Account</h2>
        <p className="text-sm text-muted-foreground">Sign up to get access to custom features.</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-name">Full Name</Label>
          <Input id="signup-name" type="text" placeholder="Enter your full name" className="bg-[#eff6ff] border-none h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-email">Email</Label>
          <Input id="signup-email" type="email" placeholder="Enter your email" className="bg-[#eff6ff] border-none h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="signup-password">Password</Label>
          <Input id="signup-password" type="password" placeholder="Create a password" className="bg-[#eff6ff] border-none h-12" />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold mt-4">
          Sign up
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-12 gap-2 border-gray-200">
          <FacebookIcon className="w-5 h-5" />
          Facebook
        </Button>
        <Button variant="outline" className="h-12 gap-2 border-gray-200">
          <GoogleIcon className="w-5 h-5 text-red-500" />
          Google
        </Button>
      </div>

      <p className="text-center text-sm text-[#474747]">
        Already have an account?{" "}
        <button
          onClick={() => onSwitch("signin")}
          className="text-primary font-semibold hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}
