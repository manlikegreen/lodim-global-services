"use client";

import { FaChevronRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SvgAoftwareIcon from "../Icons/AoftwareIcon";
import SvgDataAnalysis from "../Icons/DataAnalysis";
import SvgTechnologyTraining from "../Icons/TechnologyTraining";
import SvgDatabase from "../Icons/Database";
import SvgMobileApp from "../Icons/MobileApp";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const sectionRef = useRef(null);
  const pOneRef = useRef(null);
  const pTwoRef = useRef(null);
  const pThreeRef = useRef(null);
  const servicesRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.3 },
    });

    timeline
      .fromTo(
        pOneRef.current,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: pOneRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
      .fromTo(
        pTwoRef.current,
        { opacity: 0, x: 10 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: pTwoRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
        "-=0.2"
      )
      .fromTo(
        pThreeRef.current,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: pThreeRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
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
    <section ref={sectionRef} className="container my-[3rem]">
      <div className="flex-col gap-4 font-bold">
        <p ref={pOneRef} className="text-2xl md:text-5xl">
          We offer a wide
        </p>
        <p ref={pTwoRef} className="text-2xl md:text-5xl">
          array of{" "}
          <span
            ref={pThreeRef}
            className="text-brand text-4xl md:text-6xl uppercase font-bold justify-center items-center"
          >
            Services
          </span>
        </p>
      </div>
      <section className="my-[2rem] lg:my-[3rem] py-12">
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

export default OurServices;
