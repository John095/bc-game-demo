"use client";
import Image from "next/image";
import React from "react";

export default function Banner() {
  
  return (
    <div className="rounded-2xl flex justify-between items border border-gray-200 bg-white px-0 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 relative overflow-hidden">
      <div className="bg-gradient-to-r from-brand-900/80 to-transparent h-full w-full bg-contain absolute left-0 top-0 -z-1 overflow-hidden">
        <Image 
          src="/images/3D-logo.webp" 
          alt="3D-logo"  
          width={400}
          height={400}
          className=""
        />
      </div>
      <div className="flex flex-col gap-2 m-6 py-4 sm:py-2 flex-1 justify-center items-start sm:items-center z-100">
        <h3 className="text-gray-800 dark:text-white text-2xl sm:text-3xl font-bold mb-4"> Stay Untamed</h3>
        <div className="flex flex-col items-start sm:items-center justify-center rounded-2xl bg-none backdrop-blur-sm sm:bg-gray-100/80 dark:sm:bg-black/80 py-3 sm:px-20 mb-4">
          <p className="text-gray-800 dark:text-white text-xl sm:text-2xl mb-2">
            Sign Up & Get
          </p>
          <h3 className="text-gray-800 dark:text-white text-xl sm:text-3xl uppercase font-bold"> UP TO <span className="bg-gradient-to-r from-brand-900 to-brand-500 bg-clip-text text-transparent">$20,000.00</span></h3>
          <p className="text-gray-800 dark:text-white text-xl sm:text-2xl m-2">
            in Casino or Sports
          </p>
        </div>
        <button className=" w-32 sm:w-[250px] py-3 text-base rounded-md text-gray-900 bg-gradient-to-r from-brand-900 to-brand-500 hover:bg-theme-primary-dark font-bold">
            Get Started
        </button>
      </div>
      <div className="flex flex-col flex-1 justify-end sm:justify-center z-100">
        <Image 
          src="/images/banner.webp" 
          alt="banner-image"  
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <Image 
          src="/images/team-icons.webp" 
          alt="team-icons"  
          width={60}
          height={60}
          className="absolute right-0 sm:right-4 top-0 sm:top-[30%]"
        />
    </div>
  );
}
