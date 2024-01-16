type HamburgerIconProps = {
  isMenuOpen: boolean;
};

export function HamburgerIcon({ isMenuOpen }: HamburgerIconProps) {
  return (
    <svg
      className="w-6 h-6 text-primary-light"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {isMenuOpen ? (
        <path d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}
