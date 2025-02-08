"use client";

import { Button } from "@/components/UI/Button";
import { useTheme } from "next-themes";
import React from "react";

const GetInTouch = () => {
  const { theme } = useTheme();

  return (
    <section className="bg-brand">
      <div className="container py-[9rem] lg:py[12rem]">
        <div className="grid-cols-1 md:grid-cols-2 gap-14 rounded-lg mt-16 md:flex justify-between mb-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-80 p-12">
          <div className="pb-8 text-center md:text-left w-full md:w-1/2">
            <h1 className="text-5xl font-bold pb-4">Get in touch</h1>
            <p className="pb-4">
              Got a question? We&apos;d love to hear from you. Fill out the form
              and we&apos;ll get back to you as soon as possible
            </p>
            <div className="flex flex-col gap-2">
              <p>Call Us: +2347035339853, +2348084272971 </p>
              <p>Say Hi: lodimservices@gmail.com</p>
            </div>
          </div>
          <div className="dark:bg-transparent/50 rounded-2xl p-8 w-full md:w-1/2 border-4 border-black/50 dark:border-white/10 backdrop:blur-xl">
            <h2 className="text-2xl font-semibold pb-8">Add a comment</h2>
            {/* <p className="text-brand-ash mb-8">
            Share your ideas, converse with millions of other Web3 enthusiasts
          </p> */}
            <form>
              <label htmlFor="name" className="text-base block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="What is your name?"
                className="w-full p-4 border border-brand-ash focus:border-brand-secondary rounded-2xl mb-4 placeholder-brand-dark dark:placeholder-brand-bg bg-inherit text-xs"
              />

              <label htmlFor="email" className="text-base block mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="What is your email address?"
                className="w-full p-4 border border-brand-ash focus:border-brand-secondary rounded-2xl mb-4 placeholder-brand-dark dark:placeholder-brand-bg bg-inherit text-xs"
              />

              <label htmlFor="phoneNumber" className="text-base block mb-2">
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                placeholder="What is your phone number?"
                className="w-full p-4 border border-brand-ash focus:border-brand-secondary rounded-2xl mb-4 placeholder-brand-dark dark:placeholder-brand-bg bg-inherit text-xs"
              />

              <label htmlFor="comment" className="text-base block mb-2">
                Comment
              </label>
              <textarea
                id="comment"
                placeholder="Write your message here..."
                className="w-full p-4 border border-brand-ash focus:border-brand-secondary rounded-2xl mb-4 placeholder-brand-dark dark:placeholder-brand-bg bg-inherit text-xs"
              ></textarea>

              <div className="text-center pt-5 md:text-[0.75rem] w-full">
                {theme === "light" ? (
                  <Button
                    variant="alternate"
                    className="max-w-[17em] px-12 mx-auto"
                  >
                    Explore now
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    className="max-w-[17em] px-12 mx-auto"
                  >
                    Explore now
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
