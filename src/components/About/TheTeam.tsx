import Image, { StaticImageData } from "next/image";
import React from "react";
import ip from "@/assets/About/Team/ip.png";
import ce from "@/assets/About/Team/ce.png";
import gsa from "@/assets/About/Team/gsa.png";

const TheTeam = () => {
  return (
    <section className="py-[3rem] lg:py-[5rem]">
      <div className="container">
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-4xl font-medium">
            Meet the{" "}
            <span className="text-brand uppercase font-bold text-4xl lg:text-5xl">
              LODIM
            </span>{" "}
            team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-[4rem]">
          {TEAM.map((t) => (
            <div key={t.name}>
              <div className="text-center">
                <Image src={t.img} alt="" className="rounded-xl" />
                <h1 className="pt-2 font-semibold text-xl">{t.name}</h1>
                <h1>{t.role}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface team {
  name: string;
  role: string;
  img: StaticImageData;
}

const TEAM: Array<team> = [
  {
    name: "Jacob Wunude Lucky",
    role: "Chief Operating Officer",
    img: ip,
  },
  {
    name: "Ebube Onunwor",
    role: "Director of Applications",
    img: ce,
  },
  {
    name: "Sofiri Green",
    role: "Director of Designs",
    img: gsa,
  },
];

export default TheTeam;
