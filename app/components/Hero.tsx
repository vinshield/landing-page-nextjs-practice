"use client";

import BlueArrow from "@/public/assets/blue-button.svg";
import Image from "next/image";
import Gradient from "@/public/assets/Gradient.svg";
import HeroImg from "@/public/assets/Image.svg";
import GoogleImg from "@/public/assets/Google.svg";
import SlackImg from "@/public/assets/Slack.svg";
import TrustPilotImg from "@/public/assets/Trustpilot.svg";
import CNNImg from "@/public/assets/CNN.svg";
import ClutchImg from "@/public/assets/Clutch.svg";
import { useState } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pt-4 lg:pt-[44px]">
      <div className="mx-auto px-5 text-center md:px-16 lg:max-w-[846px] lg:px-0">
        <h1 className="text-[32px] font-medium leading-10 lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="pt-6 lg:text-[18px] lg:leading-7">
          Get a bird&apos;s eye view with our customizable dashboard. Stay on
          top of things! Revamp your work process with our game-changing
          feature. Boost productivity and efficiency!
        </p>

        <div className="mx-8 flex justify-center gap-x-6 pt-8 text-[14px] sm:text-[16px] lg:px-0 lg:text-[18px]">
          <button className="w-1/2 rounded-[4px] bg-[#4328EB] py-4 text-white sm:px-8 md:w-fit">
            Try for free
          </button>
          <button
            className="flex w-1/2 items-center justify-end gap-3 sm:justify-center md:w-fit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View pricing{" "}
            <Image
              src={BlueArrow}
              alt="view pricing"
              className={isHovered ? "move-right" : "move-back"}
            />
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="mt-28 h-[400px] w-full object-cover md:h-auto"
        />
        <div className="absolute flex flex-col items-center lg:-top-14">
          <Image
            src={HeroImg}
            alt="hero image"
            className="-ml-10 h-[310px] sm:h-[400px] lg:-ml-24 lg:h-auto lg:w-[100%]"
          />

          <div className="padding-container mx-auto flex flex-col items-center justify-center lg:hidden">
            <p className="mb-5 text-white lg:mb-0 lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="flex gap-8">
              <Image src={GoogleImg} alt="google icon" />
              <Image src={SlackImg} alt="slack icon" />
            </div>
            <div className="mb-8 flex gap-8">
              <Image src={TrustPilotImg} alt="google icon" />
              <Image src={CNNImg} alt="slack icon" />
              <Image src={ClutchImg} alt="slack icon" />
            </div>
          </div>

          <div className="padding-container relative mx-auto hidden items-center lg:bottom-20 lg:flex lg:flex-row lg:justify-between">
            <p className="mb-5 text-white lg:mb-0 lg:text-[18px]">
              Trusted by these companies
            </p>
            <Image src={GoogleImg} alt="google icon" />
            <Image src={SlackImg} alt="slack icon" />
            <Image src={TrustPilotImg} alt="google icon" />
            <Image src={CNNImg} alt="slack icon" />
            <Image src={ClutchImg} alt="slack icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
