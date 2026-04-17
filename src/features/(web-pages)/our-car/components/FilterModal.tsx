"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../ui/dialog";
import { BannerForm } from "@/shared/BannerForm";
import { Button } from "../../../../../ui/button";
import { SlidersHorizontal } from "lucide-react";

interface FilterModalProps {
  trigger?: React.ReactNode;
}

export function FilterModal({ trigger }: FilterModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="lg:hidden flex items-center gap-2 rounded-xl border-gray-200">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-transparent border-none shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Filter Rides</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center h-full w-full">
           <BannerForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
