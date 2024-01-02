interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div
      className={`md:w-96 sm:w-60 w-40 bg-primary-light rounded-md text-[#CBC7C0] font-Mako text-stroke md:text-6xl sm:text-4xl text-xl px-4 py-1.5 ${className}`}
    >
      {title}
    </div>
  );
}
