"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { Label } from "../../../../ui/label";
import { Checkbox } from "../../../../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../ui/form";
import { cn } from "@/lib/utils";

const agentSignupSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  businessType: z.string().min(1, "Please select a business type"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type AgentSignupValues = z.infer<typeof agentSignupSchema>;

export function AgentSignupForm({ onSwitch }: { onSwitch: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<AgentSignupValues>({
    resolver: zodResolver(agentSignupSchema),
    defaultValues: {
      companyName: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      businessType: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const password = form.watch("password");

  // Basic strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length >= 8) strength += 25;
    if (/[A-Z]/.test(pass)) strength += 25;
    if (/[0-9]/.test(pass)) strength += 25;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 25;
    return strength;
  };

  const strength = getPasswordStrength(password);

  function onSubmit(values: AgentSignupValues) {
    console.log("Agent Signup Data:", values);
    // Modal will be closed by the parent or showing success state
  }

  return (
    <div className="w-full max-w-[550px] mx-auto bg-white p-6 md:p-10 rounded-[24px] shadow-sm border border-gray-100">
      <div className="flex flex-col items-center text-center mb-4">
        <Image
          src="/logo.png"
          alt="Setrips Logo"
          width={120}
          height={50}
          className="h-auto"
        />
        <h1 className="text-3xl font-medium text-[#0F172A] mb-2">Create Agent Account</h1>
        <p className="text-[#64748B] text-sm">Join our ride booking management platform</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="space-y-2.5">
                <FormLabel className="text-[#334155] font-normal ">Company / Agent Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter company or agent name"
                    className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[#334155] font-normal">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-[#334155] font-normal">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-[#334155] font-normal">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[#334155] font-normal">Business Type</FormLabel>
                <div className="relative">
                  <FormControl>
                    <select
                      className={cn(
                        "flex h-12 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                        !field.value && "text-muted-foreground"
                      )}
                      {...field}
                    >
                      <option value="" disabled>Select business type</option>
                      <option value="Passenger">Passenger</option>
                      <option value="Agents">Agents</option>
                    </select>
                  </FormControl>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#94A3B8]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[#334155] font-normal">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-[#334155] font-normal">Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="h-12 bg-white border-gray-200 focus:border-primary/50 focus:ring-primary/20 rounded-xl pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-primary transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />



          <Button
            type="submit"
            className="w-full h-14 bg-[#0056A3] hover:bg-[#004481] text-white font-semibold text-lg rounded-xl transition-all shadow-lg shadow-[#0056A3]/20 mt-2"
          >
            Create Account
          </Button>

          {/* <p className="text-center text-sm text-[#64748B] mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitch}
              className="text-primary font-semibold hover:underline"
            >
              Sign in here
            </button>
          </p> */}
        </form>
      </Form>
    </div>
  );
}
