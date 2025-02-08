import Image, { StaticImageData } from "next/image";
import React from "react";
import developer from "@/assets/Home/WhoWeAre/developer.png";
import technologies from "@/assets/Home/WhoWeAre/technologies.png";

const WhoWeAre = () => {
  return (
    <section className="pt-[3rem] pb-[5rem] bg-gray-500 bg-opacity-30 dark:bg-opacity-10">
      <div className="container">
        <div className="flex gap-2 lg:gap-4 font-bold">
          <p className="text-2xl lg:text-6xl">Who</p>
          <p className="text-2xl lg:text-6xl text-brand">We</p>
          <p className="text-2xl lg:text-6xl text-brand">Are</p>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center">
          {DETAILS.map((d, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 max-w-xs md:max-w-lg lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:py-10 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center p-10`}
            >
              <Image src={d.srcImage} alt="" width={600} height={600} />
              <div className="w-full md:w-3/5 text-center md:text-left">
                <h1 className="text-xl md:text-4xl font-bold">
                  {d.title.start}
                  <span className="text-brand uppercase">{d.title.end}</span>
                  <span>?</span>
                </h1>
                <p className="mt-4 mb-6 text-sm md:text-lg font-medium">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface OurInfo {
  index: number;
  title: {
    start?: string;
    end?: string;
  };
  desc: string;
  srcImage: StaticImageData;
}

const DETAILS: Array<OurInfo> = [
  {
    index: 1,
    title: {
      start: "What is ",
      end: "LODIM Global Services",
    },
    desc: "We are skilled professionals in the areas of software developement and maintenance, mobile application developement, as well as data analysis with over 15 years of experience. We thrive on the exchange of ideas and collective pursuit of building innovative digital solutions for your business.",
    srcImage: developer,
  },
  {
    index: 2,
    title: {
      start: "What do we ",
      end: " do",
    },
    desc: "We are proficient in the use of powerful software development, database management, and data analysis tools which include: C#, ASP.NET, Microsoft SQL, Power BI, Java, Spring Boot, and React Native. We use these technologies to craft innovative solutions, tailor made to meet whatever needs our clients may have in the digital space.",
    srcImage: technologies,
  },
];
export default WhoWeAre;
