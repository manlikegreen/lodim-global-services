"use client";

import React, { useState } from "react";
import { Button } from "../UI/Button";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Logo/LODIM11A.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Clear input after success
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-black pt-[3rem] w-screen">
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center py-8 gap-4">
        {/* Left Side */}
        <div className="text-brand-ash pt-6 md:pt-0 text-left w-full md:w-1/2 flex gap-8">
          <div className="flex-col gap-4 flex items-center justify-center">
            <Link href="/">
              <div className="flex-row gap-4">
                <Image
                  src={logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <div className="hidden lg:flex flex-col font-bold uppercase justify-center items-center pt-4 text-center xl:text-left">
                  <p className="text-lg">LODIM Global Services</p>
                </div>
              </div>
            </Link>
            <div className="hidden lg:flex justify-center items-center text-center xl:text-left">
              <p className="text-base">#10 6th Avenue, Egbelu, Port Harcourt</p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 text-center">
            <p className="font-semibold">Feel free to reach us on:</p>
            <p className="text-sm">
              +2347035339853, +2347040011584, +2347040307014
            </p>
            <p>contactus@lodimgs.com</p>
            <div className="flex flex-col gap-2 pt-4 items-center">
              <div className="flex gap-4">
                <Link href={"https://www.instagram.com"} target="_blank">
                  <FaInstagramSquare />
                </Link>
                <Link href={""} target="_blank">
                  <FaLinkedin />
                </Link>
                <Link href={"https://www.facebook.com"} target="_blank">
                  <FaFacebook />
                </Link>
              </div>
              <p className="font-bold text-base">LODIM Global Services</p>
            </div>
          </div>
        </div>

        {/* Right Side - Subscription */}
        <div className="w-full md:w-1/2">
          <p className="font-bold text-lg uppercase text-brand-ash">
            Subscribe
          </p>
          <div className="text-brand-ash">
            <form onSubmit={handleSubscribe}>
              <label htmlFor="email" className="text-base block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="w-full p-4 border border-brand-ash focus:border-brand rounded-2xl mb-4 placeholder-brand-bg bg-inherit text-xs"
                required
              />
              <Button
                type="submit"
                variant="default"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            {status === "success" && (
              <p className="text-green-500 mt-2">Subscription successful!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-2">Error subscribing. Try again.</p>
            )}
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="container font-semibold flex justify-between text-xs md:text-sm lg:text-base py-4 text-brand-ash">
          <p>@ 2025 All Copyrights Reserved</p>
          <p className="">LODIM Global Services</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
