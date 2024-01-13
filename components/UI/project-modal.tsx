import { useEffect } from "react";
import { ProjectItem } from "../layout/projects";
import OverlayLink from "./overlay-link";
import ClickIcon from "../icons/click";
import GitHubIcon from "../icons/github";
import SectionTitle from "./section-title";
import ToolIcon from "../icons/tool";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  const backgroundImageDiv = {
    backgroundImage: `url(${project.imagePath})`,
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-primary-light bg-opacity-30 z-50 flex justify-center items-center simpleFadeInModal animate-simpleFadeIn"
        onClick={onClose}
      >
        <div
          className="relative w-[60rem] h-[40rem] bg-secondary-back rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-6 flex justify-end px-6 expandLeft animate-expandLeft">
            <span className="font-Montserrat text-6xl text-primary-light px-8 py-1 rounded-md bg-neutral-offset">
              {project.title}
            </span>
          </div>
          <div className="relative mt-8 flex items-center mx-6">
            <div
              className={`relative bg-center bg-cover h-[25rem] w-[38rem] rounded-md fadeInRightModal animate-fadeInRight`}
              style={backgroundImageDiv}
            >
              <OverlayLink onClick={() => window.open(project.link, "_blank")}>
                <div className="flex justify-center items-center pl-4 pr-2 py-1">
                  <span>Click for GitHub</span>
                  <GitHubIcon className="h-6" />
                </div>
              </OverlayLink>
            </div>
            <div className="absolute right-0 min-h-[16rem] w-[28rem] bg-accent-back rounded-md z-30 flex justify-center items-center simpleFadeInModalText animate-simpleFadeIn">
              <p className="px-8 py-4 text-primary-light text-[18px] font-Mako">
                {project.description}
              </p>
            </div>
          </div>
          <div className="simpleFadeInToolBox animate-simpleFadeIn">
            <div className="absolute bottom-0 w-full h-16 px-6  expandUpwardsToolbox animate-expandUpwards">
              <div className="w-full h-full bg-neutral-offset rounded-tl-md rounded-tr-md">
                <div
                  className={`absolute -top-5 left-10 flex justify-start w-32 bg-primary-light rounded-md text-[#CBC7C0] font-Mako text-stroke text-[18px] py-1.5`}
                >
                  <ToolIcon className="h-6 mt-[2px] ml-1" />
                  <span className="ml-1">toolbox</span>
                </div>
                <div className="pt-6 px-40 flex justify-around items-center simpleFadeInTools animate-simpleFadeIn">
                  {project.toolbox.map((tool) => (
                    <span className="opacity-30 text-primary-light ">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
