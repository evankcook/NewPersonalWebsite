import NavButton from "../../../components/navbutton";
import DownArrowIcon from "../../../components/icons/down-arrow";

import heroContent from "../../../config/content/hero.json";

// The hero section containing intro information and resume.
export default function Hero() {
  return (
    <div className="h-dvh w-full flex flex-col justify-between items-center sm:pt-60 pt-40 ">
      <div className="w-2/3 pb-40 sm:text-left text-center">
        <h3 className="font-Mako text-primary-light lg:text-3xl text-2xl sm:mb-1 mb-4 fadeDown animate-fadeDown">
          {heroContent.greeting}
        </h3>
        <h1 className="inline font-Montserrat bg-accent-back text-primary-light lg:text-[85px] text-[60px] sm:px-4 px-0 transition-opacity animate-fadeIn fadeIn">
          {heroContent.fullname}
        </h1>
        <div className="animate-fadeInDelayed fadeIn sm:mt-0 mt-4">
          <h2 className="font-Mako text-primary-light lg:text-[35px] sm:text-[24px] text-[16px] sm:mb-4 mb-8">
            {heroContent.subtitle}
          </h2>
          <p className="font-Mako text-primary-light lg:text-[20px] text-[16px] w-4/5 mb-8 sm:block hidden">
            {heroContent.briefDescription}
          </p>
          <NavButton to={"/resume.pdf"} newPage={true}>
            {heroContent.resumeCTA}
          </NavButton>
        </div>
      </div>
      <a className="fadeDown animate-fadeDownDelayed" href="#about-me">
        <DownArrowIcon className="text-accent-overlay hover:text-light-secondary  h-10 my-8" />
      </a>
    </div>
  );
}
