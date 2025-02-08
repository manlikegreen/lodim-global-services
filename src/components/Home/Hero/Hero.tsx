"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateTitle } from "./utils/animateTitle";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);

  const { theme } = useTheme();

  useGSAP(animateTitle, { scope: containerRef });

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center bg-gradient-to-b from-blue-400 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-background h-screen"
    >
      <div className="w-full flex flex-col items-center px-6 pt-24 lg:pt-48 max-w-screen-lg mx-auto">
        <p id="hero" className="hero-title pb-4">
          Hello and Welcome to
        </p>
        <h1 className="text-brand-dark dark:text-brand-bg font-extrabold text-3xl lg:text-7xl text-center">
          LODIM Global Services
        </h1>
        <div
          id="title"
          className="relative grid justify-items-center mt-4 mb-16 min-w-[42em]"
        >
          <h1
            id="intro"
            className="grid gap-4 min-w-[13rem] grid-cols-[1fr_max-content] text-center text-2xl lg:text-5xl font-bold leading-tight"
          >
            <span id="services" className="relative">
              We develop and oversee
            </span>
            <span
              id="handle"
              className="absolute opacity-0 -translate-x-[30%] -translate-y-full"
            >
              We offer
            </span>
            <span
              id="develop"
              className="absolute opacity-0 -translate-x-[40%] -translate-y-[150%]"
            >
              We create and develop
            </span>
            <span
              id="data"
              className="absolute opacity-0 -translate-x-[10%] -translate-y-[200%]"
            >
              We ensure seamless
            </span>
          </h1>
          <p className="relative text-brand dark:text-brand-ash text-center font-medium mt-5 w-full h-6 leading-tight text-lg lg:text-3xl flex justify-center">
            <span id="software" className="absolute inset-0 text-center">
              Sustainable Software Solutions
            </span>
            <span
              id="dataAnalysis"
              className="absolute opacity-0 text-center translate-x-5"
            >
              Data Analysis and Visualization
            </span>
            <span
              id="mobile"
              className="absolute opacity-0 text-center -translate-x-5 translate-y-5"
            >
              Web <span className="text-brand-dark dark:text-brand">&</span>{" "}
              Mobile Applications
            </span>
            <span
              id="databaseManagement"
              className="absolute opacity-0 text-center -translate-y-5"
            >
              Database Management
            </span>
          </p>
        </div>
        <Link href="/services">
          {theme === "light" ? (
            <Button variant="alternate" className="max-w-[17em] px-12 mx-auto">
              Explore now
            </Button>
          ) : (
            <Button variant="default" className="max-w-[17em] px-12 mx-auto">
              Explore now
            </Button>
          )}
        </Link>
        <div className="flex flex-col items-center mt-12 lg:mt-24 text-center">
          <p className="font-medium text-lg">Keep up with us on social media</p>
          <div className="flex mt-6 text-3xl gap-8 cursor-pointer">
            {/* <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon /> */}
            <p className="hover:text-brand">
              <FaInstagram />
            </p>
            <p className="hover:text-brand">
              <FaLinkedin />
            </p>
            <p className="hover:text-brand">
              <FaFacebook />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
