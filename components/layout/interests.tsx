"use client";

import InterestBox from "../UI/interest-box";
import Section from "../UI/section";
import SectionTitle from "../UI/section-title";

export type InterestItem = { title: string; description: string; link: string };

const interestsList: InterestItem[] = [
  {
    title: "Music Composition and Performance",
    description:
      "Music, especially of the classical genre, has fascinated me from a young age. Taking up the violin at the age of 3 and piano at the age of 11, I grew to appreciate the discipline that the gradual but crucially consistent practice of the two instruments imparted on me. In my middle school years, I found a new interest in Western music theory and classical composition. Western music theory allowed me to break down, analyze, and appreciate the elegance in the complexity of works such as the fugues of Bach and preludes of Rachmaninoff. Such music contains multiple lines that are independent in their melodic contour. Yet, together, the lines provide a beautiful harmonic connectedness. I believe this quality can be seen in the 'Art' of computer science and software engineering. The task of breaking down a complex codebase into its individual working parts intrigues the musician in me. Yet, similar to my musical evolution, I now take a role as the 'composer' writing my own applications, hopefully, for the world to enjoy. The link below will take you to a piece I composed in my senior year of high school: Prelude in G Minor. Please enjoy :)",
    link: "https://www.youtube.com/watch?v=JrmnGUC1id0",
  },
  {
    title: "An Avid Art Appreciatician",
    description:
      "Although I lack the talent to produce, I am an avid admirer of the visual arts. If I am not spending a free day at the symphony or cheering on my Minnesota Vikings, you may find me at a local art museum checking out the new exhibit in town. In this artistic realm, I am most drawn to Russian Expressionist Art, especially the works of Vassily Kandinsky. The link below will take you to a design project in which I brought a few works of Kandinsky to life through a subtly-choreographed animation of the first of Scriabin's Deux Poemes.",
    link: "https://youtu.be/H--IakmRnNU",
  },
];

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
            {interestsList.map((interest) => (
              <InterestBox {...interest} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
