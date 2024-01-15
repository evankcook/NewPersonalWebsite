"use client";

import InterestBox from "../UI/interest-box";
import Section from "../UI/section";
import SectionTitle from "../UI/section-title";

import interestsContent from "../../config/content/interests.json";

export type InterestItem = { title: string; description: string; link: string };

const interestsList: InterestItem[] = interestsContent;

export default function Interests() {
  return (
    <Section id="interests">
      {(isVisible) => (
        <div className="w-full flex flex-col items-center sm:pt-48 pt-32 pb-60">
          <div
            className={`w-full flex justify-center ${
              isVisible ? "fadeDown animate-fadeDown" : ""
            }`}
          >
            <div className="md:w-2/3 sm:w-4/5 w-[90%]">
              <SectionTitle>interests</SectionTitle>
            </div>
          </div>
          <div
            className={`sm:w-4/5 w-[90%] flex flex-col items-center md:mt-24 mt-10 ${
              isVisible ? "simpleFadeIn animate-simpleFadeIn" : ""
            }`}
          >
            {interestsList.map((interest, idx) => (
              <InterestBox key={idx} {...interest} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
