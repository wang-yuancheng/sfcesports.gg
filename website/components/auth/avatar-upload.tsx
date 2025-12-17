"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import profileIcon from "@/assets/icons/circle-user-round.svg";
import editIcon from "@/assets/icons/square-pen.svg";

export default function AvatarUpload({
  uid,
  url,
  onUpload,
}: {
  uid: string | null;
  url: string | null;
  onUpload: (url: string) => void;
}) {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(url);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) setAvatarUrl(url);
  }, [url]);

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // 2. Get the Public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(filePath);

      setAvatarUrl(publicUrl);
      onUpload(publicUrl);
    } catch (error) {
      alert("Error uploading avatar!");
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative group">
        <label
          htmlFor="avatar-upload"
          className="cursor-pointer relative block h-32 w-32 rounded-full overflow-hidden border-4 border-gray-100 transition-colors"
        >
          {/* Display Image */}
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt="Avatar"
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
              <Image
                src={profileIcon}
                alt="Default"
                width={64}
                height={64}
                className="opacity-50"
              />
            </div>
          )}

          {/* Edit Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {uploading ? (
              <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  ...
                </span>
              </div>
            ) : (
              <div className="
                w-10 h-10 flex items-center justify-center rounded-full 
                bg-black/40 backdrop-blur-[2px] 
                transition-all duration-0 
                group-hover:scale-95 group-hover:ring-2 group-hover:ring-white
              ">
                <div className="relative h-5 w-5">
                  <Image
                    src={editIcon}
                    alt="Edit"
                    fill
                    className="object-contain invert"
                  />
                </div>
              </div>
            )}
          </div>
        </label>

        {/* Hidden Input */}
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
          className="hidden"
        />
      </div>
    </div>
  );
}