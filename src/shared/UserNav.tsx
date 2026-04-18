"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  History,
  Trash2,
  LogOut,
  ChevronDown,
  Settings
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../ui/popover";
import { Button } from "../../ui/button";
import { useAuth } from "@/lib/hooks/use-auth";
import { DeleteProfileModal } from "./DeleteProfileModal";

export function UserNav() {
  const { logout } = useAuth();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer group p-1 pr-2 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform group-hover:scale-105">
              <Image
                src="/user.jpg"
                alt="Profile"
                fill
                className="object-fill"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2 mr-4 mt-2 bg-white shadow-xl border border-gray-100 rounded-xl" align="end">
          <div className="flex flex-col gap-1">

            <Link href="/profile">
              <Button variant="ghost" className="w-full justify-start gap-3 h-11 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors">
                <User className="w-4 h-4" />
                <span>Profile Settings</span>
              </Button>
            </Link>

            <Link href="/booking-history">
              <Button variant="ghost" className="w-full justify-start gap-3 h-11 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors">
                <History className="w-4 h-4" />
                <span>Booking History</span>
              </Button>
            </Link>

            <div className="h-px bg-gray-100 my-1 mx-2" />

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-11 text-red-600 hover:bg-red-50 transition-colors"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete Profile</span>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-11 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={logout}
            >
              <LogOut className="w-4 h-4" />
              <span>LogOut</span>
            </Button>

          </div>
        </PopoverContent>
      </Popover>

      <DeleteProfileModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
}
