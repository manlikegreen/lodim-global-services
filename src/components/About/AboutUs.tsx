"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Button } from "../UI/Button";
import Link from "next/link";
import SvgAoftwareIcon from "../Icons/AoftwareIcon";
import SvgDataAnalysis from "../Icons/DataAnalysis";
import SvgTechnologyTraining from "../Icons/TechnologyTraining";
import SvgDatabase from "../Icons/Database";
import SvgMobileApp from "../Icons/MobileApp";

const AboutUs = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });

    gsap.fromTo(
      ".hero-content",
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
  }, []);

  return (
    <>
      <section className="md:pt-[8rem] pt-[10rem]">
        <div className="container">
          <div className="h-5/6 flex flex-col py-8">
            <div>
              <p id="hero" className="hero-title pb-4">
                Who We Are
              </p>
              <div className="hero-content flex-col gap-2 w-fit bg-brand-ash rounded-lg">
                <p className="p-6 text-brand-dark">About Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[3rem] lg:py-[5rem]">
        <div className="container">
          <p className="text-2xl md:text-4xl font-semibold">
            <span
              id="pOne"
              className="text-brand text-4xl md:text-6xl uppercase font-bold"
            >
              Quality Service{" "}
            </span>{" "}
            and
          </p>
          <p className="text-2xl md:text-4xl font-semibold">
            <span className="text-brand text-4xl md:text-6xl uppercase font-bold">
              committed employees
            </span>
            .
          </p>
          <p className="text-2xl md:text-4xl mt-6 font-semibold pb-[3rem]">
            How do we do it?
          </p>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 pb-8 md:pb-12">
            <div className="flex flex-col gap-6 md:gap-8 md:pt-8 pb-8 md:pb-12 w-full lg:w-2/3">
              <p>
                Founded in 2024, LODIM Global Services Ltd. is an innovative and
                technology-driven company specializing in providing world-class
                IT solutions to businesses of all sizes. Our services include
                software development, data analysis, and technology training,
                ensuring organizations stay ahead in the digital era.
              </p>
              <p>
                With a team of highly skilled professionals, we prioritize
                efficiency, security, and cutting-edge technology to deliver
                tailor-made solutions that align with our client&apos;s business
                goals. Our mission is to help businesses harness the power of
                technology to optimize processes, improve decision-making, and
                gain a competitive edge in their respective industries.
              </p>
              <p>
                We are proficient in the use of powerful software development,
                database management, and data analysis tools which include: C#,
                ASP.NET, Microsoft SQL, Power BI, Java, Spring Boot, and React
                Native.
              </p>
            </div>
            <div className="flex items-center gap-[0.69rem] md:mb-7">
              <div
                aria-hidden
                className="w-full h-[0.125rem] lg:w-[0.125rem] bg-black dark:bg-brand-ash lg:h-full"
              ></div>
            </div>
            <div className="flex flex-col gap-6 md:gap-8 pb-8 md:pb-12 w-full lg:w-1/3">
              <div className="flex">
                <h1 className="text-brand font-semibold text-3xl items-center justify-center mx-auto lg:mx-14 uppercase">
                  Services
                </h1>
              </div>
              <div>
                {SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-between p-6 font-light"
                  >
                    <Link href={"/services"}>
                      <Button variant={"link"}>
                        <div className="flex items-center gap-4">
                          {<service.icon className="" width={50} height={50} />}
                          {service.title}
                        </div>
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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

export default AboutUs;
