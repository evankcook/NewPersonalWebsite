"use client";

import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import LinkedInIcon from "@/components/icons/linkedin";
import GitHubIcon from "@/components/icons/github";
import MailIcon from "@/components/icons/mail";
import HamburgerIcon from "@/components/icons/hamburger";

export default function Navbar() {
  const navLinks = [
    { name: "about me", path: "/#about-me" },
    { name: "experience", path: "/#experience" },
    { name: "projects", path: "/#projects" },
    { name: "interests", path: "/#interests" },
  ];

  const iconLinks = [
    {
      name: "linkedin",
      icon: (
        <LinkedInIcon className="text-primary-light hover:text-light-secondary" />
      ),
      to: "https://www.linkedin.com/in/evankcook/",
    },
    {
      name: "github",
      icon: (
        <GitHubIcon className="text-primary-light hover:text-light-secondary" />
      ),
      to: "https://github.com/evankcook",
    },
    {
      name: "mail",
      icon: (
        <MailIcon className="text-primary-light hover:text-light-secondary" />
      ),
      to: "mailto: cook.ev@northeastern.edu",
    },
  ];

  return (
    <nav className="bg-secondary-back text-primary-light w-full h-20 xl:pl-36 lg:pl-20 pl-12 xl:pr-10 pr-6 z-40">
      <div className="h-full w-full flex justify-between items-center ">
        <div className="md:hidden">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button>
                  <HamburgerIcon isMenuOpen={open} />
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {(ref) => (
                    <Menu.Items
                      ref={ref}
                      className="w-full absolute top-20 left-0"
                    >
                      {navLinks.map((link) => (
                        <Menu.Item key={link.name}>
                          <a
                            href={link.path}
                            className="block font-Montserrat text-xl text-primary-light  bg-light-secondary hover:bg-accent-back w-full pl-12 py-2"
                          >
                            {link.name}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  )}
                </Transition>
              </>
            )}
          </Menu>
        </div>
        <div className="hidden md:flex xl:space-x-16 lg:space-x-8 space-x-4 justify-start">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-Montserrat text-xl text-primary-light hover:text-light-secondary"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex lg:w-1/6 w-1/3 xl:space-x-8  space-x-4 justify-end items-center ">
          {iconLinks.map((link) => (
            <a key={link.name} href={link.to} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
