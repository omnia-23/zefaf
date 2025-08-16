import Image from "next/image";
import React from "react";
import { Member } from "./OueTeam";

export default function TeamCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Image Section with hover effect */}
      <div className="relative w-[193px] h-[193px] mb-4 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300">
        <Image
          src={member.image}
          alt={member.name}
          width={193}
          height={193}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="w-full px-2">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-primary">
          {member.name}
        </h3>

        {/* Position with decorative separator */}
        <div className="relative inline-block">
          <p className="text-gray-500 text-sm relative z-10 px-2 bg-white">
            {member.position}
          </p>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-0" />
        </div>
      </div>
    </div>
  );
}
