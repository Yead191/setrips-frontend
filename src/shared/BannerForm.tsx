"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { cn } from "../lib/utils";
import React from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  tripType: z.enum(["hourly", "distance"]),
  pickupLocation: z
    .string()
    .min(2, { message: "Pickup location is required." }),
  dropoffLocation: z
    .string()
    .min(2, { message: "Drop-off location is required." }),
  pickupDate: z.date({ message: "Pickup date is required." }),
  pickupTime: z.string().min(1, { message: "Pickup time is required." }),
  dropoffDate: z.date({ message: "Drop-off date is required." }),
  dropoffTime: z.string().min(1, { message: "Drop-off time is required." }),
});

type FormValues = z.infer<typeof formSchema>;

export function BannerForm() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tripType: "distance",
      pickupLocation: "",
      dropoffLocation: "",
      pickupTime: "",
      dropoffTime: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Form Data Submitted:", values);
    router.push("/our-car"); 
  }

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in slide-in-from-right-4 duration-700">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Trip Type */}
          <FormField
            control={form.control}
            name="tripType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-4 bg-slate-50 p-1.5 rounded-full w-full"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0 flex-1">
                      <FormControl>
                        <RadioGroupItem value="hourly" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex-1 text-center py-2.5 rounded-full cursor-pointer transition-all text-sm font-medium",
                          field.value === "hourly"
                            ? "bg-white shadow-sm text-primary"
                            : "text-slate-500",
                        )}
                      >
                        Hourly Based
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0 flex-1">
                      <FormControl>
                        <RadioGroupItem value="distance" className="sr-only" />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "flex-1 text-center py-2.5 rounded-full cursor-pointer transition-all text-sm font-medium",
                          field.value === "distance"
                            ? "bg-white shadow-sm text-primary"
                            : "text-slate-500",
                        )}
                      >
                        Distance Based
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            {/* Pickup Location */}
            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#08323D] font-normal">
                    Pickup location
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                      <Input
                        placeholder="Enter pickup location"
                        className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Drop-off Location */}
            <FormField
              control={form.control}
              name="dropoffLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#08323D] font-normal">
                    Drop-off location
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                      <Input
                        placeholder="Enter drop-off location"
                        className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Pickup Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pickupDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#08323D] font-normal mb-2">
                      Pickup date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "h-12 pl-3 text-left font-normal bg-slate-50 border-slate-100 rounded-lg",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white shadow-lg rounded-md z-50 border"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          className="rounded-lg border"
                        />
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
                    <FormLabel className="text-[#08323D] font-normal">
                      Pickup time
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input
                          type="time"
                          className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Drop-off Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dropoffDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#08323D] font-normal mb-2">
                      Drop-off date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "h-12 pl-3 text-left font-normal bg-slate-50 border-slate-100 rounded-lg",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white shadow-lg rounded-md z-50 border"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          className="rounded-lg border"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dropoffTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#08323D] font-normal">
                      Drop-off time
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                        <Input
                          type="time"
                          className="pl-10 h-12 bg-slate-50 border-slate-100 focus-visible:ring-primary rounded-lg"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-lg  bg-primary hover:bg-primary/95 transition-all shadow-lg rounded-xl flex gap-3"
          >
            Search
          </Button>
        </form>
      </Form>
    </div>
  );
}
