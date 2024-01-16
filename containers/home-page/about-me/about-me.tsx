"use client";

import { Section, SectionTitle } from "@/components/section";
import aboutMeContent from "../../../config/content/about-me.json";

export function AboutMe() {
  return (
    <Section id="about-me">
      {(isVisible) => (
        <div className={`flex justify-center py-60`}>
          <div className="flex flex-col justify-between lg:w-2/3 sm:w-4/5 w-[90%] md:h-[30rem] h-[28rem]">
            <div className="flex w-full h-full">
              <div className="flex flex-col justify-between h-full md:w-2/3 w-1/2">
                <div
                  className={`drop-shadow-sm h-6 w-full bg-secondary-back ${
                    isVisible ? "expandWidthFirst animate-expandWidth" : ""
                  }`}
                ></div>
                <SectionTitle
                  className={`${
                    isVisible ? "fadeDownTitle animate-fadeDown" : ""
                  }`}
                >
                  {aboutMeContent.title}
                </SectionTitle>
                <div
                  className={`drop-shadow-lg  flex justify-center items-center bg-accent-back h-[330px] ${
                    isVisible ? "fadeInUpText animate-fadeInUp" : ""
                  }`}
                >
                  <p className="px-6 py-2  text-primary-light font-Mako xl:text-[20px] md:text-[16px] sm:text-[12px] text-[9px]">
                    {aboutMeContent.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between md:w-1/3 w-1/2 h-full ml-6">
                <div
                  className={`drop-shadow-md bg-[url('/me-photo.jpg')] bg-center bg-cover w-full h-[90%] rounded-md ${
                    isVisible ? "fadeInUpPhoto animate-fadeInUp" : ""
                  }`}
                ></div>
                <div
                  className={`drop-shadow-sm bg-secondary-back w-full h-[5%] ${
                    isVisible ? "expandHeight animate-expandHeight" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div
              className={`drop-shadow-sm h-2 w-full bg-neutral-offset mt-4 ${
                isVisible ? "expandWidthSecond animate-expandWidth" : ""
              }`}
            ></div>
          </div>
        </div>
      )}
    </Section>
  );
}
