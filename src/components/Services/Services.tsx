"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import SvgAoftwareIcon from "../Icons/AoftwareIcon";
import SvgDataAnalysis from "../Icons/DataAnalysis";
import SvgTechnologyTraining from "../Icons/TechnologyTraining";
import SvgDatabase from "../Icons/Database";
import SvgMobileApp from "../Icons/MobileApp";

const Services = () => {
  const servicesRef = useRef(null);
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });

    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
      }
    );
    gsap.fromTo(
      "#pOne",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.5,
      }
    );

    gsap.fromTo(
      "#pTwo",
      {
        opacity: 0,
        x: 10,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.8,
      }
    );

    gsap.fromTo(
      "#pThree",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        onComplete: () => {
          gsap.fromTo(
            gsap.utils.toArray("#services") as HTMLElement[],
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        },
      }
    );
  }, []);

  return (
    <section className="pt-[5rem] lg:pt-[7rem] pb-[3rem]">
      <div className="container">
        <div className="h-5/6 flex flex-col py-8">
          <div>
            <p id="hero" className="hero-title pb-4">
              What we <span className="text-brand text-3xl">do</span>
            </p>
            <div className="hero-content flex-col gap-2 w-fit bg-brand-ash rounded-lg">
              <p className="p-6 text-brand-dark">Services</p>
            </div>
          </div>
        </div>
        <section className="my-[2rem] lg:my-[3rem] py-4">
          <div className="flex flex-col gap-4">
            <h1 id="pOne" className="text-2xl lg:text-4xl font-semibold">
              At{" "}
              <span
                id="pTwo"
                className="text-brand text-3xl lg:text-5xl font-bold"
              >
                LODIM Global Services Limited
              </span>
              ,{" "}
            </h1>
            <h1
              id="pThree"
              className="text-2xl lg:text-4xl font-semibold pb-12"
            >
              we offer the following professional services{" "}
              <span className="text-brand">;</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                ref={servicesRef}
                id="services"
                className="flex flex-col items-center justify-between h-full p-6 border-4 border-black/5 dark:border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-500 bg-transparent/20 dark:bg-transparent/40 backdrop:blur-xl opacity-0"
              >
                <div className="p-4 rounded-full">
                  {
                    <service.icon className="text-brand-dark dark:text-brand-bg transform hover:rotate-12 transition duration-300" />
                  }
                </div>
                <h3 className="text-xl font-bold mt-4 uppercase">
                  {service.title}
                </h3>
                <p className="pt-4 text-center flex-grow">
                  {service.description}
                </p>
                <div className="group relative bottom-1 mt-4">
                  <button className="relative group-hover:text-brand group-hover:scale-105 transition-all duration-500 flex items-center">
                    View More
                    <FaChevronRight className="ml-2" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-brand transition-all duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

interface Services {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const SERVICES: Services[] = [
  {
    title: "Software Development",
    description:
      "We specialize in crafting bespoke cross-platform software solutions to streamline operations and enhance efficiency.",
    icon: SvgAoftwareIcon,
  },
  {
    title: "Data Analysis",
    description:
      "We provide cutting-edge data analytics services to help businesses make informed decisions based on real-time insights. ",
    icon: SvgDataAnalysis,
  },
  {
    title: "Technology Training",
    description:
      "We offer tailored training programs designed to equip businesses and individuals with essential technological skills, ensuring they stay ahead in a rapidly evolving digital landscape",
    icon: SvgTechnologyTraining,
  },
  {
    title: "Database Management",
    description:
      "We ensure business data security with extremely functional Database Management Services to to keep you ahead of your competition and add an edge by crafting a strategy in alignment with your data requirements",
    icon: SvgDatabase,
  },
  {
    title: "Mobile App. Development",
    description:
      "We also specialize in developing intuitive, engaging, and high-performace mobile applications tailored to your specific needs",
    icon: SvgMobileApp,
  },
];

export default Services;
