"use client";

import { ProfileAvatar } from "./sections/ProfileAvatar";
import { ProfileForm } from "./sections/ProfileForm";

const ProfileFeature = () => {
  return (
    <section className="bg-white min-h-screen py-6  flex justify-center items-center">
      <div className="container max-w-[600px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-3">

          {/* Top Avatar Section */}
          <ProfileAvatar />

          {/* Form Section */}
          <ProfileForm />

        </div>
      </div>
    </section>
  );
};

export default ProfileFeature;
