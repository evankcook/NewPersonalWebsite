"use client";

import { useEffect, useState } from "react";
import { Section, SectionTitle } from "@/components/section";
import { ExperienceBox } from "./experience-box";

import experienceContent from "../../../config/content/experience.json";

export type ExperienceItem = {
  employer: string;
  imageAddress: string;
  position: string;
  start: string;
  end: string;
  bullets: String[];
};

const experienceList: ExperienceItem[] = experienceContent;

export function Experience() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPositionLeft, setIsPositionLeft] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [nextTab, setNextTab] = useState(1);

  // Makes sure the highlight background is only behind the selected tab.
  const changeTabBackgrounds = (idx: number) => {
    const allButtons = document.querySelectorAll(".experience-button");

    allButtons.forEach((element) => {
      const button = element as HTMLElement;
      button.style.backgroundColor = "transparent";
    });

    const button = document.getElementById("experience-button-" + idx);
    button!.style.backgroundColor = "#1E453E";
  };

  const handleAnimating = async (idx: number) => {
    setIsAnimating(true);
    await setTimeout(() => {
      setIsAnimating(false);
      setIsPositionLeft(!isPositionLeft);
      setCurrentTab(idx);
      if (experienceList.length - 1 === idx) {
        setNextTab(0);
      } else {
        setNextTab(idx + 1);
      }
    }, 500);
    console.log("position", isPositionLeft);
  };

  const handleTabChange = (idx: number) => {
    if (idx !== currentTab) {
      handleAnimating(idx);
      changeTabBackgrounds(idx);
    }
  };

  useEffect(() => {
    changeTabBackgrounds(0);
  }, []);

  return (
    <Section id="experience">
      {(isVisible) => (
        <div className="w-full flex flex-col items-center pt-32 pb-60">
          <div
            className={`w-full flex justify-center ${
              isVisible ? "fadeDown animate-fadeDown" : ""
            }`}
          >
            <div className="md:w-2/3 sm:w-4/5 w-[90%]">
              <SectionTitle>experience</SectionTitle>
            </div>
          </div>
          <div
            className={`w-2/3 ${
              isVisible ? "fadeInTabs animate-fadeInTabs" : ""
            }`}
          >
            <div className="flex justify-end mt-8">
              {experienceList.map((exp, idx) => (
                <button
                  id={"experience-button-" + idx}
                  key={idx}
                  className="experience-button md:w-32 w-20 font-Mako md:text-[20px] text-[12px] text-primary-light py-2 drop-shadow"
                  onClick={() => handleTabChange(idx)}
                >
                  {exp.employer}
                </button>
              ))}
            </div>
          </div>
          <div
            className={`relative drop-shadow-md flex items-end justify-center w-4/5 lg:h-[31rem] h-[34rem] mt-14 ${
              isVisible ? "fadeInUpFiles animate-fadeInUpFiles" : ""
            }`}
          >
            <div
              className={`absolute w-full lg:h-[29rem] h-[32rem] bg-primary-light z-10 ${
                isAnimating ? "fadeDownFrom animate-fadeDownFrom" : ""
              }`}
            >
              <button
                className={`absolute top-[-25px] md:w-56 sm:w-32 w-28 bg-secondary-back font-Mako text-primary-light border-primary-light md:text-[20px] text-[14px] px-4 py-1 rounded-md border-[3px] ${
                  isPositionLeft
                    ? "md:left-14 sm:left-8 left-4"
                    : "md:left-[21rem] sm:left-[12rem] left-[10rem]"
                }`}
              >
                {experienceList[currentTab].employer}
              </button>
              <ExperienceBox experience={experienceList[currentTab]} />
            </div>
            <div
              className={`absolute top-0 w-full scale-x-[0.95] lg:h-[29rem] h-[32rem] bg-primary-light opacity-30 ${
                isAnimating
                  ? "fadeDownFromAndOut animate-fadeDownFromAndOut"
                  : ""
              }`}
            >
              <button
                className={`absolute top-[-25px] md:w-56 sm:w-32 w-28 bg-secondary-back ${
                  !isAnimating && "hover:bg-light-secondary"
                } font-Mako text-primary-light border-primary-light md:text-[20px] text-[14px] px-4 py-1 rounded-md border-[3px] ${
                  isPositionLeft
                    ? "md:left-[21rem] sm:left-[12rem] left-[10rem]"
                    : "md:left-14 sm:left-8 left-4"
                }`}
                onClick={() => handleTabChange(nextTab)}
              >
                {experienceList[nextTab].employer}
              </button>
              <ExperienceBox experience={experienceList[nextTab]} />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
