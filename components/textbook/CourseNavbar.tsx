export type NavbarLink = {
  name: string;
  href: string;
};

type CourseNavbarProps = {
  navbarLinks: NavbarLink[];
};
export default function CourseNavbar({ navbarLinks }: CourseNavbarProps) {
  return (
    <header className="bg-white">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-end w-full py-6 border-b border-slate-800 lg:border-none">
          <div className="flex items-center">
            <div className="hidden ml-10 space-x-8 lg:block">
              {navbarLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-slate-800 hover:text-slate-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navbarLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-800 hover:text-slate-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
