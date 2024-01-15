import { ReactNode } from "react";

type OverlayLinkProps = {
  onClick: () => void;
  children: ReactNode;
};

export default function OverlayLink({ onClick, children }: OverlayLinkProps) {
  return (
    <span onClick={onClick}>
      <div className="absolute w-full h-full hover:opacity-100 opacity-0 flex justify-center items-center">
        <div className="absolute w-full h-full bg-accent-overlay opacity-35 z-10 rounded-md"></div>
        <div className="absolute z-20 rounded-[80px] border-2 border-accent-overlay bg-github-green opacity-85 text-accent-overlay flex justify-center items-center">
          {children}
        </div>
      </div>
    </span>
  );
}
