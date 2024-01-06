"use client";

import { useEffect, useState } from "react";
import Section from "../UI/section";
import SectionTitle from "../UI/section-title";
import ExperienceBox from "../UI/experience-box";

export type ExperienceItem = {
  employer: string;
  imageAddress: string;
  position: string;
  start: string;
  end: string;
  bullets: String[];
};

const experienceList: ExperienceItem[] = [
  {
    employer: "Point Focal",
    imageAddress:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhURBxEREBIVFRYbGBcWFxcQFhsSGBcbFxgdGR8kKCogJCYlGxoWIjIlJykrLy8uFx81OTMuNygtLi0BCgoKDg0NFQ4QFSsaFxktKy0tKy0uNy0rNystKysrKys3Ky0tKy0tNystKysrKy03Ky0rKystKysrNy0rKystK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAgMEAQj/xAA8EAACAQIEAwIMBAQHAAAAAAAAAQIDBAUGEUESITFxgQcTIjI1UVJhcoKhwSNTkbI2g7HRFSRCYmOS4f/EABgBAQEBAQEAAAAAAAAAAAAAAAADAgEE/8QAHxEBAQEAAwADAAMAAAAAAAAAAAECAxExEiFREzJB/9oADAMBAAIRAxEAPwCIAB6nhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOVOnOrUUaScm+SS5tgcT04fh93iVwoWMJVJPZfd7Fwy94Prm50njDdKPsLz32vY0TDsOtMMt+CxhGnH3ev3vqyetyeK54rfVLwXwdUIUdcYm5Sa82D4VHX37sg8w5Fv8N1nZa16a9S8tL3rfuNbBj51W8Weun53fJg2bMOUMOxrWTXiqr/1xXX4luZlj2WcSwSetxHip7VI849/q7ymdyoa47lDAA2wAAAAAAAAAAAAAAAAAAAAABqXgwsrZYM63BHxjnJcW/CkuX1MtNZ8GH8NfzZ/0RPfinF/ZbwARep8B9IXHsy4dgkP81LWe0I85P8At3j1y2T1MsqWZM7Ybh8XTtkrip0aXmL4nv2L6FHzDnDEsZ1in4ml7EX1+J7ldK54/wBQ1y/5Fi/wqGK2arUeGlOXE3FLSHnNclsQd1aV7Spw3EXF/R9jLdl/0PD5v3M9tajSr0+GtFST2Zr5dM/HuM+BYMRy7KPlWL1/2vr3PcgZwnTm1UTTXVPkzXfadljiADoAAAAAAAAAAAAAAAAGteDD+Gv5s/6IyU1fwbVYUcrOVVqMVUnq29EuUSfJ4pxf2XA8mJYlZ4Xb8d9ONOPv6vsXVlOzD4QqFDWGDLxkvzHyin7luZ7f391iNw6l7OVST3f29RjOLfVdcsni3Zh8IF1dawwhOlD23577PUUqc51Jt1G23zbfNnEFpJHn1q30AB1xdMv+h4fN+5kgR+X/AEPD5v3MkCd9WngQ2aacHYKTS4lJLXfTmTJE5o9GfOvuJ6a8VEAFEQAAAAAAAAAAAAAAAA7nd3DtFSc5eLTbUdfJ4nudIAAAAATeAZXxLG5a0I8FPepLlHu9fcc76JLfEIlq+RbsvZEvsR0nf60KfvXlte5bd5ecv5Sw3BUpRXjKvty6/KuiLAS1yfi+eL9V6eVrWhaRhhzcOFdJNyT3595B3NtXtKnDcRcX9H2Mvx1V6NO4p8NaKknszM0pcT/FAInNHoz519y64jl6UPKsXqvZfXuZS81xlTw7SaaamtU+T3Ny9p6lkVAAFUAAAAAAAAAAAAAAAAAA50KNW4qqFCLnJ9Elq2BwPbheFXuLV+Cwg5vfZLtexccveDypU0njb4V+XF8/me3caDZWVtY26haQjTitktCeuSTxXPFb6qeX8gWdlpPFGq0/Z6QX9y5QioR0itF+iOYJW2r5zJ4AA40A6Lu7oWVBzupxhFdW3ojP8w+EOUtYYGtP+SS5/LF/c7M2s61M+rrjGN2GDUeK+mo+qK5yfYjLc2ZrqY+1GFONOnF8tfKm9PW/sV+5uK11Wc7mUpyfVt6s6y2cSPPvkt+gAG0wAAAAAAAAAAAAAAAAvOQ75YdZuShGWsmm9NJaLToyjFuyv6M+d/YzrxrHrTrHELe+j+DLnunyaPYZ5GThJODaa6NcmTmH5hnT8m9XEvaXXvW5G5embWcHTb3FK4p8VGSkvcQ+YM1Ybgiaqy46m1OPN976Iz01bJ9pyTUVz5FPzDn2ysNYYbpXqevpBPt37ijZgzXiWNtxqy8XS/Lj073uQRXPH+oa5fx7sWxe+xevx383J7LpFdiPCAURv2AA6AAAAAAAAAAAAAAAAAAAFuyv6M+d/YqJbsr+jPnf2M6ax6lgAYVefEbmvaYbUlazlCXD1i9H1RRG3J6y5su2N+ianwr9yKQaynv0OVKnOrUUaScpPkkubbOJreRct0sKsI1riOteotdXz4Yvol3dTutdOYz8qp9jkDGrmnrWUKOu0nq/0Wp9vfB9jNvT1o+Lq6bRej+uhrYJfOr/AMWX57rUalCq41ouMlyaa0aOBsOdct0sZsHOjFKvBaxa6yS5uL+3vMeK512hvHxoADTIAAAAAAAAAAAAAAAASWFYvWw9cOilDXXTo+5kaDh30vVjiFtfR/Alz3i+UkeozyEpQlrBtNbrqT2HZinDyb5cS9pde9bmblSb/Uxjfomp8K/cikFzxOvSucEqSoSUlwrmviRTDuWd+vVhdKNfE6UanSVSCfY5I30/PVKpKlVUoPRpprtRvOD4hSxTDYVqHSS/R7ruepjkV4b7HtABJd8MHx6lCjjdaNPoqs9P+xt2JXtHDrGdW4ekYLV/Zd75d5g11Xnc3MqlTrKTb7W9SnGhzXyOsAFkAAAAAAAAAAAAAAAAAAAAAByhUnCLUG0nyem6OIAAncr5musv1nwfiUpedBvT3ap7Mggcs7JbPuNlsc7YFd09ZVfFPeM04/Xp9T7e51wK0p6qsqj2jBOTff0+pjIMfxxX+arBmrNN1j9Th08XRT1UNddX65Pf/wBK+Abk6Ttt+6AA64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=",
    position: "Co-op",
    start: "July 2023",
    end: "December 2023",
    bullets: [
      "Developed a scalable metrics dashboard from scratch, integrating MySQL and DynamoDB with AWS Lambda, and learning to use localstack for development, leveraging acquired capabilities in full-stack development and cloud services.",
      "Successfully resolved 29 GitHub issues in a React application, enhancing UI functionality and aesthetics, leveraging my TypeScript skills and learning Material UI.",
      "Executed backend updates and migrations in MySQL using Alembic and independently integrated new Lambda functions.",
      "Authored comprehensive documentation for a 31-endpoint API using Swagger on a static S3-hosted site.",
      "Implemented a complete redesign of the marketing page using Webflow, managing Make and AWS Lambda integrations for streamlined website updates, demonstrating proficiency in HTML and CSS styling.",
    ],
  },
  {
    employer: "TAMID",
    imageAddress:
      "https://images.squarespace-cdn.com/content/v1/55368b50e4b04b38c815870d/1429641155019-Q2QLHZ70CXIM4R7NLRHQ/TAMID_transparent.png",
    position: "Member",
    start: "September 2021",
    end: "April 2023",
    bullets: [
      "Developed a scalable metrics dashboard from scratch, integrating MySQL and DynamoDB with AWS Lambda, and learning to use localstack for development, leveraging acquired capabilities in full-stack development and cloud services.",
      "Successfully resolved 29 GitHub issues in a React application, enhancing UI functionality and aesthetics, leveraging my TypeScript skills and learning Material UI.",
      "Executed backend updates and migrations in MySQL using Alembic and independently integrated new Lambda functions.",
      "Authored comprehensive documentation for a 31-endpoint API using Swagger on a static S3-hosted site.",
      "Implemented a complete redesign of the marketing page using Webflow, managing Make and AWS Lambda integrations for streamlined website updates, demonstrating proficiency in HTML and CSS styling.",
    ],
  },
];

export default function Experience() {
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
              <SectionTitle title="experience" />
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
                  className="experience-button md:w-32 w-20 font-Mako md:text-[20px] text-[12px] text-primary-light py-2"
                  onClick={() => handleTabChange(idx)}
                >
                  {exp.employer}
                </button>
              ))}
            </div>
          </div>
          <div
            className={`relative flex items-end justify-center w-4/5 lg:h-[31rem] h-[34rem] mt-14 ${
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
              className={`absolute top-0 w-[95%] lg:h-[29rem] h-[32rem] bg-primary-light opacity-30 ${
                isAnimating
                  ? "fadeDownFromAndOut animate-fadeDownFromAndOut"
                  : ""
              }`}
            >
              <button
                className={`absolute top-[-25px] md:w-56 sm:w-32 w-28 bg-secondary-back font-Mako text-primary-light border-primary-light md:text-[20px] text-[14px] px-4 py-1 rounded-md border-[3px] ${
                  isPositionLeft
                    ? "md:left-80 sm:left-[11rem] left-[9rem]"
                    : "md:left-14 sm:left-8 left-4"
                } ${
                  isAnimating && isPositionLeft
                    ? "fadeDownTab animate-fadeDownTab"
                    : ""
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
