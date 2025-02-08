import Hero from "@/components/Home/Hero/Hero";
import OurServices from "@/components/Home/OurServices";
import Testimonials from "@/components/Home/Testimonials";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <WhoWeAre />
        <OurServices />
        <Testimonials />
      </div>
    </>
  );
}
