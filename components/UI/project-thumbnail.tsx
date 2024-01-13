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
      <div className="w-[47%] h-[24rem] mb-12 flex justify-center items-center rounded-md bg-secondary-back p-3">
        <div
          className={`relative bg-center bg-cover h-full w-full rounded-md`}
          style={backgroundImageDiv}
        >
          <div className="absolute bottom-2 right-2 bg-primary-light w-56 h-10 flex justify-end items-center">
            <span className="font-Montserrat font-[20px] text-neutral-offset pr-4">
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
