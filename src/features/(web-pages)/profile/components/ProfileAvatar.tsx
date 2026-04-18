"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

export const ProfileAvatar = () => {
  const [image, setImage] = useState("/user.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Main Avatar */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100 transition-transform group-hover:scale-[1.02]">
          <Image
            src={image}
            alt="Profile Avatar"
            fill
            className="object-cover"
          />
        </div>

        {/* Upload Button overlay */}
        <button
          onClick={triggerFileInput}
          className="absolute bottom-1 right-1 w-11 h-11 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-lg hover:bg-gray-50 transition-all text-[#10B981] group-hover:scale-110 active:scale-95"
          title="Upload Photo"
        >
          <Camera className="w-5 h-5" />
        </button>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    </div>
  );
};
