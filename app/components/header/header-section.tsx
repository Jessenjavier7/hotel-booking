import Image from "next/image";
import React from "react";

interface HeaderSectionProps {
  title: string;
  subTitle: string;
}

const HeaderSection = (props: HeaderSectionProps) => {
  return (
    <header className="relative h-60 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="header image"
          fill
          className="object-cover object-center w-full h-full"
        ></Image>
        <div className="absolute inset-0 bg-black-opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
        <h1 className="text-5xl font-bold leading-tight capitalize">
          {props.title}
        </h1>
        <p className="text-xl text-gray-300">{props.subTitle}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
