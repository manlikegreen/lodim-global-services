"use client";

import React, { useRef } from "react";
import SvgArrowIcon from "../Icons/ArrowIcon";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const BusinessApproach = () => {
  const sectionRef = useRef(null);
  const pOneRef = useRef(null);
  const pTwoRef = useRef(null);
  const pThreeRef = useRef(null);
  const featuresRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      pOneRef.current,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: pOneRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      pTwoRef.current,
      { opacity: 0, x: 10 },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        scrollTrigger: {
          trigger: pTwoRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      pThreeRef.current,
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        scrollTrigger: {
          trigger: pThreeRef.current,
          start: "top 80%",
        },
        onComplete: () => {
          gsap.fromTo(
            gsap.utils.toArray("#features") as HTMLElement[],
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              scrollTrigger: {
                trigger: featuresRef.current,
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
    <section ref={sectionRef}>
      <div className="container my-[2rem]">
        <div className="flex-col gap-4 font-bold">
          <p ref={pOneRef} className="text-2xl md:text-5xl">
            Our
          </p>
          <p ref={pTwoRef} className="text-2xl md:text-5xl">
            Business{" "}
          </p>
          <div
            ref={pThreeRef}
            className="text-brand text-4xl md:text-6xl uppercase font-bold justify-center items-center mt-4"
          >
            Approach
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-6 mb-4">
          <div className="justify-center lg:justify-start items-center w-full text-center lg:text-left">
            <div className="flex flex-col gap-4 mt-[3.5rem] w-full">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  ref={featuresRef}
                  id="features"
                  className="flex-col gap-2 mb-6 opacity-0"
                >
                  <div className="flex gap-2 text-2xl font-medium mb-4">
                    <p className="hidden lg:block">{f.icon({})}</p>
                    <p className="uppercase mx-auto lg:mx-0 font-medium">
                      {f.title}
                    </p>
                  </div>
                  <p className="lg:ps-6 text-xl">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Features {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const FEATURES: Features[] = [
  {
    title: "Consultation",
    description:
      "Understanding client-specific challenges and objectives through a detailed needs assessment.",
    icon: SvgArrowIcon,
  },
  {
    title: "Customization",
    description:
      "Developing tailored software and business solutions aligned with strategic goals.",
    icon: SvgArrowIcon,
  },
  {
    title: "Implementation",
    description:
      "Seamless integration of solutions into business operations, ensuring minimal disruption.",
    icon: SvgArrowIcon,
  },
  {
    title: "Support & Maintenance",
    description:
      "Ongoing assistance, system updates, and optimization to ensure long-term success.",
    icon: SvgArrowIcon,
  },
];

export default BusinessApproach;
