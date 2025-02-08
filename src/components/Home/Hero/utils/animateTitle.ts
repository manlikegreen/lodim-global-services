import gsap from "gsap";

const slideOut = { position: "absolute", x: "-30%", y: "240%", opacity: 0 };
const slideIn = { position: "relative", x: 0, y: 0, opacity: 1 };
const skew = { skewY: 40 };

export function animateTitle() {
  gsap
    .timeline({
      delay: 1,
      repeat: -1,
      repeatDelay: 3,
      defaults: { duration: 1 },
    })
    .to("#services", {
      position: "absolute",
      x: "-50%",
      y: "240%",
      opacity: 0,
    })
    .to("#software", { x: -40, opacity: 0 }, "<")
    .fromTo("#handle", skew, { ...slideIn, skewY: 0 }, "<")
    .to("#dataAnalysis", { x: 0, opacity: 1 }, "<")
    .to("#handle", slideOut, "+3")
    .to("#dataAnalysis", { x: -20, opacity: 0 }, "<")
    .fromTo("#develop", skew, { ...slideIn, skewY: 0 }, "<")
    .to("#mobile", { x: 0, y: 0, opacity: 1 }, "<")
    .to("#develop", slideOut, "+=3")
    .to("#mobile", { x: 20, opacity: 0 }, "<")
    .fromTo("#data", { ...skew, x: 0 }, { ...slideIn, skewY: 0 }, "<")
    .to("#databaseManagement", { x: 0, y: 0, opacity: 1 }, "<")
    .to("#data", slideOut, "+=3")
    .to("#databaseManagement", { x: 20, opacity: 0 }, "<")
    .to("#services", slideIn, "<")
    .to("#software", { x: 0, y: 0, opacity: 1 }, "<");
}
