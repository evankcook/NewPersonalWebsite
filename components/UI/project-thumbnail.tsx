import ClickIcon from "../icons/click";
import { ProjectItem } from "../layout/projects";
import { useState } from "react";
import ProjectModal from "./project-modal";
import OverlayLink from "./overlay-link";

export default function ProjectThumbnail({
  title,
  description,
  link,
  imagePath,
  toolbox,
}: ProjectItem) {
  const [isOpen, setIsOpen] = useState(false);

  // Define background image
  const backgroundImageDiv = {
    backgroundImage: `url(${imagePath})`,
  };

  return (
    <>
      <div className="drop-shadow-sm sm:w-[47%] w-full lg:h-[28rem] md:h-72 sm:h-64 h-36 md:mb-12 sm:mb-8 mb-4 flex justify-center items-center rounded-md bg-secondary-back p-3">
        <div
          className={`relative bg-center bg-cover h-full w-full rounded-md`}
          style={backgroundImageDiv}
        >
          <div className="absolute bottom-2 right-2 bg-primary-light md:w-56 w-40 h-10 flex justify-end items-center">
            <span className="font-Montserrat md:text-[16px] text-[12px] text-neutral-offset pr-4">
              {title}
            </span>
          </div>
          <OverlayLink onClick={() => setIsOpen(true)}>
            <div className="px-12 py-1 flex justify-center items-center">
              <ClickIcon />
            </div>
          </OverlayLink>
        </div>
      </div>
      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={{
          title,
          description,
          link,
          imagePath,
          toolbox,
        }}
      />
    </>
  );
}
