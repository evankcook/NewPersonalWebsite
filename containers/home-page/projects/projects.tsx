"use client";

import ProjectThumbnail from "./project-thumbnail";
import { Section, SectionTitle } from "@/components/section";

import projectContent from "../../../config/content/projects.json";

export type ProjectItem = {
  title: string;
  description: string;
  link: string;
  imagePath: string;
  toolbox: string[];
};

const projectList: ProjectItem[] = projectContent;

export function Projects() {
  return (
    <Section id="projects">
      {(isVisible) => (
        <div className="w-full flex flex-col items-center pt-32 pb-60">
          <div
            className={`w-full flex justify-center ${
              isVisible ? "fadeDown animate-fadeDown" : ""
            }`}
          >
            <div className="md:w-2/3 sm:w-4/5 w-[90%]">
              <SectionTitle>projects</SectionTitle>
            </div>
          </div>
          <div
            className={`sm:w-4/5 w-[90%] flex flex-wrap justify-between items-center md:mt-16 mt-6 ${
              isVisible ? "simpleFadeIn animate-simpleFadeIn" : ""
            }`}
          >
            {projectList.map((project, idx) => (
              <ProjectThumbnail key={idx} {...project} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
