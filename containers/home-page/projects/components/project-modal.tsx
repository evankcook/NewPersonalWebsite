import { useEffect } from "react";
import { ProjectItem } from "..";
import OverlayLink from "../../../../components/overlay-link";
import ClickIcon from "../../../../components/icons/click";
import GitHubIcon from "../../../../components/icons/github";
import SectionTitle from "../../../../components/section-title";
import ToolIcon from "../../../../components/icons/tool";

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
          className="relative lg:w-[60rem] md:w-[45rem] w-[90%] lg:h-[40rem] sm:h-[36rem] h-[28rem] bg-secondary-back rounded-md drop-shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drop-shadow-md mt-6 flex justify-end px-6 expandLeft animate-expandLeft">
            <span className="font-Montserrat lg:text-6xl md:text-3xl text-lg text-primary-light px-8 py-1 rounded-md bg-neutral-offset rounded-r-none border-r-4 border-r-light-offset">
              {project.title}
            </span>
          </div>
          <div className="relative lg:mt-8 mt-6 flex items-center md:flex-row flex-col lg:mx-6 mx-4">
            <div
              className={`relative bg-center bg-cover lg:h-[25rem] md:h-[21rem] sm:h-60 h-40 lg:w-[38rem] md:w-[32rem] w-full rounded-md fadeInRightModal animate-fadeInRight`}
              style={backgroundImageDiv}
            >
              <OverlayLink onClick={() => window.open(project.link, "_blank")}>
                <div className="flex justify-center items-center pl-4 pr-2 py-1">
                  <span>Click for GitHub</span>
                  <GitHubIcon className="h-6" />
                </div>
              </OverlayLink>
            </div>
            <div className="drop-shadow-lg md:absolute md:right-0 lg:min-h-[16rem] md:min-h-[12rem] min-h-24 lg:w-[28rem] md:w-[24rem] w-full bg-accent-back rounded-md z-30 flex justify-center items-center md:mt-0 mt-4 simpleFadeInModalText animate-simpleFadeIn">
              <p className="lg:px-8 px-6 lg:py-4 py-2 text-primary-light lg:text-[18px] sm:text-[14px] text-[8px] font-Mako">
                {project.description}
              </p>
            </div>
          </div>
          <div className="simpleFadeInToolBox animate-simpleFadeIn">
            <div className="absolute bottom-0 w-full h-16 px-6  expandUpwardsToolbox animate-expandUpwards">
              <div className="w-full h-full bg-neutral-offset rounded-tl-md rounded-tr-md border-t-2 border-l-2 border-r-2 border-light-offset shadow-upward">
                <div
                  className={`absolute sm:-top-5 -top-3 left-10 flex justify-start sm:w-32 w-28 bg-primary-light rounded-md text-[#CBC7C0] font-Mako text-stroke sm:text-[18px] text-[12px] sm:py-1.5 py-0.5 shadow-upward`}
                >
                  <ToolIcon className="sm:h-6 h-4 mt-[2px] ml-1" />
                  <span className="ml-1">toolbox</span>
                </div>
                <div className="w-full pt-6 lg:px-40 sm:px-32 px-4 flex justify-around items-center flex-wrap simpleFadeInTools animate-simpleFadeIn">
                  {project.toolbox.map((tool, idx) => (
                    <span
                      key={tool + idx}
                      className="opacity-30 text-primary-light md:text-[15px] sm:text-[12px] text-[8px] py-1"
                    >
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
