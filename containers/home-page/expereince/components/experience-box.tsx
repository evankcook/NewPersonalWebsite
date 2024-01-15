import BulletIcon from "../../../../components/icons/bullet";
import { ExperienceItem } from "..";

interface ExperienceBoxProps {
  experience: ExperienceItem;
}

export default function ExperienceBox({ experience }: ExperienceBoxProps) {
  return (
    <div className="flex flex-col justify-start items-start w-full p-8">
      <div className="flex justify-start items-between w-full h-16">
        <div className="flex flex-col justify-between items-end">
          <div className="flex justify-end items-start">
            <div className="font-Montserrat md:text-[35px] sm:text-[30px] text-[22px] text-neutral-offset">
              {experience.position}
            </div>
            <div className="font-Mako md:text-[35px] sm:text-[30px] text-[22px]   text-primary-back ml-2">
              @
            </div>
            <div className="font-Monteserrat md:text-[35px] sm:text-[30px] text-[22px]  text-accent-overlay ml-2">
              {experience.employer}
            </div>
          </div>
          <div className="font-Mako md:text-[20px] sm:text-[18px] text-[12x] text-accent-back">
            {experience.start} - {experience.end}
          </div>
        </div>
        <img
          alt={experience.employer + "'s logo"}
          src={experience.imageAddress}
          className="md:h-20 h-16 ml-8 sm:block hidden"
        />
      </div>
      <ul className="list-none md:px-20 sm:px-4 px-2 2xl:mt-16 sm:mt-8 mt-2">
        {experience.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start mt-2">
            <div className="w-4 h-4 mt-1 mr-2">
              <BulletIcon />
            </div>
            <p className="text-neutral-offset xl:text-[15px] lg:text-[14px] sm:text-[13px] text-[9px] flex-1 md:pl-4 pl-1">
              {bullet}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
