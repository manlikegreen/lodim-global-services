"use client";

import { Button } from "@/components/UI/Button";
import { useTheme } from "next-themes";
import React, { useState } from "react";

const GetInTouch = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("API Response:", data); // Log full API response

      if (data.success) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phoneNumber: "", comment: "" }); // Clear form
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-brand">
      <div className="container py-[9rem] lg:py[12rem]">
        <div className="grid-cols-1 md:grid-cols-2 gap-14 rounded-lg mt-16 md:flex justify-between mb-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-80 p-12">
          <div className="pb-8 text-center md:text-left w-full md:w-1/2">
            <h1 className="text-5xl font-bold pb-4">Get in touch</h1>
            <p className="pb-4">
              Got a question? We&apos;d love to hear from you. Fill out the form
              and we&apos;ll get back to you as soon as possible.
            </p>
            <p>Call Us: +2347035339853, +2347040011584 , +2347040307014</p>
            <p>Say Hi: contactus@lodimgs.com</p>
          </div>
          <div className="dark:bg-transparent/50 rounded-2xl p-8 w-full md:w-1/2 border-4 border-black/50 dark:border-white/10 backdrop:blur-xl">
            <h2 className="text-2xl font-semibold pb-8">Add a comment</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="text-base block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="w-full p-4 border rounded-2xl mb-4"
                required
              />
              <label htmlFor="email" className="text-base block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What is your email?"
                className="w-full p-4 border rounded-2xl mb-4"
                required
              />
              <label htmlFor="phoneNumber" className="text-base block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full p-4 border rounded-2xl mb-4"
                required
              />
              <label htmlFor="comment" className="text-base block mb-2">
                Comment
              </label>
              <textarea
                id="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full p-4 border rounded-2xl mb-4"
                required
              ></textarea>

              <div className="text-center pt-5 md:text-[0.75rem] w-full">
                {theme === "light" ? (
                  <Button
                    variant="alternate"
                    className="max-w-[17em] px-12 mx-auto"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    className="max-w-[17em] px-12 mx-auto"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                )}
              </div>
              {message && <p className="text-center mt-4">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
