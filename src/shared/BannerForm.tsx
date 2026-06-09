"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin, User, Mail, Phone, Users } from "lucide-react";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cn } from "../lib/utils";
import { usePathname, useRouter } from "next/navigation";

const formSchema = z.object({
  pickupLocation: z.string().min(2, { message: "Pickup location is required." }),
  dropoffLocation: z.string().min(2, { message: "Drop-off location is required." }),
  pickupDate: z.date({ message: "Pickup date is required." }),
  pickupTime: z.string().min(1, { message: "Pickup time is required." }),
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  phoneNumber: z.string().min(5, { message: "Phone number is required." }),
  passengers: z.string().min(1, { message: "Number of passengers is required." }),
});

type FormValues = z.infer<typeof formSchema>;

export function BannerForm({ isModal = false }: { isModal?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickupLocation: "",
      dropoffLocation: "",
      pickupTime: "",
      name: "",
      email: "",
      phoneNumber: "",
      passengers: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Form Data Submitted:", values);
    if (!isModal) {
      router.push("/our-car");
    }
  }

  // The form is hidden on pages where it shouldn't show (like old behavior), unless it's in a modal
  const shouldShow = isModal || pathname === "/tour-packages";

  return (
    <div className={cn("w-full bg-white transition-all duration-700", isModal ? "max-w-none shadow-none p-0" : "max-w-xl rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in slide-in-from-right-4", shouldShow ? "block" : "hidden")}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input placeholder="Your Name" className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input placeholder="Your Email" className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input placeholder="Your Phone Number" className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passengers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">Passengers</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input type="number" placeholder="Passengers" className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pickupLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">Pickup location</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input placeholder="Enter pickup location" className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dropoffLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">Drop-off location</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input placeholder="Enter drop-off location" className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pickupDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#08323D] font-normal mb-2 mt-0.5">Pickup date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant={"outline"} className={cn("h-12 pl-3 text-left font-normal bg-slate-50 border-slate-100 rounded-lg", !field.value && "text-muted-foreground")}>
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-md z-50 border" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} className="rounded-lg border" />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pickupTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">Pickup time</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input type="time" className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-14 text-lg bg-primary hover:bg-primary/95 transition-all shadow-lg rounded-xl flex gap-3 text-white!">
            Enquiry
          </Button>
        </form>
      </Form>
    </div>
  );
}
