import { Disclosure, Transition } from "@headlessui/react";
import { InterestItem } from "./interests";
import { NavButton } from "@/components/navbutton";

export function InterestBox({ title, description, link }: InterestItem) {
  return (
    <div className="w-full sm:mb-16 mb-8">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="relative py-2 w-full bg-primary-light flex justify-start">
              <div
                className={`absolute md:top-[-24px] sm:top-[-19px] top-[-17px] md:w-56 sm:w-32 w-24  font-Mako text-primary-light  border-primary-light md:text-[20px] sm:text-[14px] text-[10px] px-4 py-1 rounded-md border-[3px] md:right-16 sm:right-12 right-6 ${
                  open ? "bg-light-secondary" : "bg-secondary-back"
                }`}
              >
                {open ? "Close" : "View"}
              </div>
              <h1 className="font-Montserrat md:text-[28px] sm:text-[20px] text-[12px] text-neutral-offset hover:text-light-offset sm:py-4 py-2 md:pl-10 sm:pl-8 pl-4">
                {title}
              </h1>
            </Disclosure.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform origin-top scale-y-0 opacity-0"
              enterTo="transform origin-top scale-y-100 opacity-100"
              leave="transition duration-100 ease-in"
              leaveFrom="transform origin-top scale-y-100 opacity-100"
              leaveTo="transform origin-top scale-y-0 opacity-0"
            >
              <Disclosure.Panel className="w-full bg-primary-light text-gray-500">
                <p className="font-Mako md:text-[18px] sm:text-[12px] text-[10px] text-neutral-offset px-8 sm:pb-4 pb-1">
                  {description}
                </p>
                <div className="w-full flex justify-center sm:py-4 py-1">
                  <NavButton to={link} newPage={true}>
                    <span className="sm:px-12 md:text-[20px] sm:text-[14px] text-[10px]">
                      Check it out
                    </span>
                  </NavButton>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
