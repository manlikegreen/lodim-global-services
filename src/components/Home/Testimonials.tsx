"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infiite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "20px",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section className="my-[4rem]">
      <div className="container">
        <h1 className="text-2xl lg:text-6xl font-bold uppercase mb-3">
          Testimonials{" "}
          <span className="inline-block bg-brand w-40 h-4 ml-2"></span>
        </h1>
        <p className="text-base lg:text-lg font-medium">
          This is what our{" "}
          <span
            className="uppercase text-xl
        lg:text-2xl text-brand font-bold"
          >
            clients
          </span>{" "}
          have said about{" "}
          <span
            className="uppercase text-xl
        lg:text-2xl text-brand font-bold"
          >
            us
          </span>
        </p>
      </div>
      <div className="container my-12">
        <Slider {...settings} className="!flex !mx-4">
          {TESTIMONIALS.map((t) => (
            <aside key={t.company} className="p-4 h-full">
              <div className="justify-between flex flex-col items-center shadow-lg p-8 rounded-2xl bg-gray-400 bg-opacity-10 border-4 border-black/5 dark:border-white/10 h-[500px] sm:h-[550px] md:h-[600px]  lg:h-[400px] xl:h-[250px]">
                <p className="text-base md:text-xl text-center my-4 font-medium">
                  {t.content}
                </p>
                <div className="mt-auto">
                  <h1 className="text-sm md:text-base text-center my-2 font-semibold">
                    {t.company}
                  </h1>
                  <h1 className="text-sm text-center text-brand-ash">
                    {t.field}
                  </h1>
                </div>
              </div>
            </aside>
          ))}
        </Slider>
      </div>
    </section>
  );
};

interface Testimonials {
  company: string;
  field: string;
  content: string;
}

const TESTIMONIALS: Array<Testimonials> = [
  {
    company: "Paraclet Supermarket",
    field: "Retail",
    content:
      "The consultancy services were a game-changer for our business strategy. Their insight and tailored advice have driven remarkable improvements in our performance. Truly invaluable!",
  },
  {
    company: "Beulah Specialist Hospital",
    field: "Healthcare",
    content:
      "The team transformed our outdated software to a high-performing, user-friendly platform. Their ongoing maintenance ensures that everything runs smoothly. I highly recommend their expertise and service.",
  },
  {
    company: "Mbarie Services",
    field: "Procurement and Rentals",
    content:
      "Our data management has never been more efficient! The robust data management solution they provided us with have streamlined our operations and boosted our productivity. Outstanding service!!!",
  },
  {
    company: "Aveon Offshore Ltd.",
    field: "Engineering and Fabrication",
    content:
      "From software development to training and consultancy, their services are top-notch. The teams professionalism and dedication are unmatched. They've been a crucial partner in our success",
  },
];

export default Testimonials;
