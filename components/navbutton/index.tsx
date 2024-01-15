type NavButtonProps = {
  to: string;
  newPage?: boolean;
  children: React.ReactNode;
};

export default function NavButton({
  to,
  newPage = false,
  children,
}: NavButtonProps) {
  return (
    <a
      href={to}
      target={newPage ? "_blank" : "_self"}
      className="bg-neutral-offset font-Mako text-primary-light border-primary-light md:text-[20px] text-[14px] px-4 py-1 rounded-md border-[3px] hover:bg-light-offset hover:text-neutral-offset hover:border-neutral-offset"
    >
      {children}
    </a>
  );
}
