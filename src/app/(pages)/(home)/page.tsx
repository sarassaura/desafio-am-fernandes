"use client";

import Image from "next/image";
import "./styles.css";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="center relative flex-col">
      <div className="h-96 bg-slate-900 w-full">
        <Image
          className="absolute opacity-50 z-10"
          src="/images/entrada.webp"
          alt="Background"
          objectFit="cover"
          fill
        />
        <div className="absolute flex justify-center items-center z-40 w-full h-full">
          <select id="regions" className="bg-white h-14 px-4 rounded-l-lg ">
            <option selected>Região</option>
            <option value="US">Santo André</option>
            <option value="CA">São Bernardo</option>
            <option value="FR">Santo André</option>
            <option value="DE">São Bernardo</option>
          </select>
          <select id="dormitory" className="bg-white h-14 px-4 rounded-none">
            <option selected>Dormitórios</option>
            <option value="one">1 dormitório</option>
            <option value="two">2 dormitórios</option>
            <option value="three">3 dormitórios</option>
          </select>
          <button className="bg-white p-4 rounded-r-lg">
            <div className="h-6 w-6">
              <Icon icon="ion:search" height={24} color="#00355E" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
