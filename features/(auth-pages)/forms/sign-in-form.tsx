"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Checkbox } from "@/ui/checkbox";
import { FacebookIcon, GoogleIcon } from "@/components/brands";

interface SignInFormProps {
  onSwitch: (view: "signup" | "forgot-password") => void;
}

export function SignInForm({ onSwitch }: SignInFormProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-foreground">Hi, Welcome Back!</h2>
        <p className="text-sm text-muted-foreground">Log into your account to continue from where you stopped.</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="signin-email">Email</Label>
          <Input id="signin-email" type="email" placeholder="Enter your email" className="bg-[#eff6ff] border-none h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="signin-password">Password</Label>
          <div className="relative">
            <Input id="signin-password" type="password" placeholder="Placeholder" className="bg-[#eff6ff] border-none h-12 pr-10" />
            {/* Password toggle icon could go here */}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-primary data-[state=checked]:bg-primary" />
            <Label htmlFor="remember" className="text-sm font-normal cursor-pointer text-[#474747]">Remember me</Label>
          </div>
          <button 
            type="button"
            onClick={() => onSwitch("forgot-password")}
            className="text-sm font-medium text-red-500 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold mt-4">
          Log in
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
        Dont have an account?{" "}
        <button 
          onClick={() => onSwitch("signup")}
          className="text-primary font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
