import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  YoutubeIcon,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useState } from "react";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import about from "./../pages/about";
// or useState('light') as fallback

const Customlink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <>
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px]  inline-block
            bg-dark absolute right-0 -bottom-0.5 dark:bg-light
               group-hover:w-full transition-[width] ease duration-300
               ${pathname === href ? "w-full" : "w-0"}
               `}
        >
          &nbsp;
        </span>
      </Link>
    </>
  );
};

const CustomMobuttonlink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <>
      <button
        href={href}
        className={`${className} relative group text-light dark:text-dark my-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px]  inline-block 
             bg-light  absolute right-0 -bottom-0.5 dark:!bg-dark
               group-hover:w-full transition-[width] ease duration-300 
               ${pathname === href ? "w-full" : "w-0"}
               `}
        >
          &nbsp;
        </span>
      </button>
    </>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        dir="rtl"
        className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8
        dark:text-light
        "
      >
        <button
          className=" flex-col items-center justify-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        <div className="w-full flex justify-between items-center lg:hidden ">
          <nav>
            <Customlink href="/" title="الرئيسية" className="ml-4" />
            <Customlink href="/about" title="تعرف عنا" className="mx-4" />
            <Customlink href="/projects" title="المشاريع" className="mx-4" />
            <Customlink href="/articles" title="المقلات " className="mr-4" />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <FacebookIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </div>

        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex items-center flex-col justify-center">
              <CustomMobuttonlink
                href="/"
                title="الرئيسية"
                toggle={handleClick}
              />
              <CustomMobuttonlink
                href="
  /about"
                title="تعرف عنا"
                toggle={handleClick}
              />
              <CustomMobuttonlink
                href="/projects"
                title="المشاريع"
                toggle={handleClick}
              />
              <CustomMobuttonlink
                href="/articles"
                title="المقلات"
                toggle={handleClick}
              />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2 ">
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 bg-light rounded-full sm:mx-1"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 sm:mx-1"
              >
                <FacebookIcon />
              </motion.a>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`mr-3 flex items-center justify-center rounded-full p-1
                ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }
                
                `}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-light"} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default NavBar;
