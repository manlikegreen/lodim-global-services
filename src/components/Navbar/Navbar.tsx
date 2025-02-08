"use client";

import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import logo from "@/assets/Logo/LODIM11B.png";
import ResponsiveMenu from "./ResponsiveNav";
import CancelIcon from "../Icons/CancelIcon";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSelected = (link: string) => {
    if (link === pathname) return "";
  };

  return (
    <>
      <nav className="bg-inherit fixed top-0 w-full z-50 shadow-xl">
        <div className="container flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex gap-4 dark:text-brand-bg">
            <Image src={logo} alt="" width={100} height={100} />
          </div>
          {/* Menu/Links Section */}
          <div className="hidden lg:block dark:text-brand-bg">
            <ul className="flex items-center gap-6">
              {Nav_Items.map((item) => (
                <li key={item.name} className="">
                  <Link
                    href={item.link}
                    data-selected={isSelected(item.link)}
                    className="inline-block py-1 px-3 hover:text-brand transition-all duration-500 font-medium"
                  >
                    <p>{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Hamburger Section */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="cancel-icon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <CancelIcon className="text-9xl text-brand-dark dark:text-brand-bg hover:text-brand" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu-icon"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <MdMenu className="text-4xl text-brand-dark dark:text-brand-bg hover:text-brand" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Sidebar Section */}
          <ResponsiveMenu open={isOpen} />
        </div>
      </nav>
      {children}
    </>
  );
};

interface NAV_ITEM {
  name: string;
  link: string;
  icon?: () => React.JSX.Element | null;
}

const Nav_Items: Array<NAV_ITEM> = [
  {
    name: "Home",
    link: "/",
    // icon: HomeIcon,
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
    // icon: ExploreIcon,
  },
  {
    name: "Contact Us",
    link: "/contact",
    // icon: BlogIcon,
  },
];

export default Navbar;
