"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/../ui/input";
import { Label } from "@/../ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/../ui/button";

export const ProfileForm = () => {
  const [gender, setGender] = useState("Male");

  return (
    <div className="space-y-5 w-full max-w-[600px]">
      <div className="text-center space-y-1">
        <h2 className="text-xl md:text-2xl font-medium text-[#001D4A]">Profile Information</h2>
      </div>

      <form className="space-y-3">
        <div className="grid grid-cols-1 gap-3">

          {/* First Name */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-[#344054]">First Name</Label>
            <Input
              placeholder="John"
              className="h-12 bg-white border-gray-200 rounded-xl px-4 text-gray-900 focus:ring-primary/20 placeholder:text-gray-300 transition-all shadow-sm"
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-[#344054]">Last Name</Label>
            <Input
              placeholder="John"
              className="h-12 bg-white border-gray-200 rounded-xl px-4 text-gray-900 focus:ring-primary/20 placeholder:text-gray-300 transition-all shadow-sm"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-[#344054]">Email Address</Label>
            <Input
              type="email"
              placeholder="John.doe@gmai.com"
              className="h-12 bg-white border-gray-200 rounded-xl px-4 text-gray-900 focus:ring-primary/20 placeholder:text-gray-300 transition-all shadow-sm"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-[#344054]">Phone Number</Label>
            <Input
              type="tel"
              placeholder="+49 123 4567890"
              className="h-12 bg-white border-gray-200 rounded-xl px-4 text-gray-900 focus:ring-primary/20 placeholder:text-gray-300 transition-all shadow-sm"
            />
          </div>

          {/* Gender Select */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-[#344054]">Select Gender</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-between bg-white border-gray-200 rounded-xl px-4 text-gray-600 font-normal hover:bg-gray-50 shadow-sm"
                >
                  {gender}
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-white border border-gray-100 shadow-xl rounded-xl p-1">
                <DropdownMenuItem
                  onClick={() => setGender("Male")}
                  className="rounded-lg h-10 cursor-pointer focus:bg-primary/5 focus:text-primary transition-colors"
                >
                  Male
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setGender("Female")}
                  className="rounded-lg h-10 cursor-pointer focus:bg-primary/5 focus:text-primary transition-colors"
                >
                  Female
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setGender("Other")}
                  className="rounded-lg h-10 cursor-pointer focus:bg-primary/5 focus:text-primary transition-colors"
                >
                  Other
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>

        {/* Save Changes Button (Optional but common) */}
        <div className="pt-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl transition-all shadow-lg shadow-primary/10">
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
};
