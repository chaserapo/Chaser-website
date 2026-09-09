import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { label: "The Paddock", hash: "paddock", testid: "nav-link-paddock" },
  { label: "The App", hash: "app", testid: "nav-link-app" },
  { label: "Why Chaser", hash: "why", testid: "nav-link-why" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goToSection = (hash) => {
    setOpen(false);
    if (pathname === "/") {
      window.__lenis?.scrollTo(`#${hash}`, { offset: -90 });
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-creamline/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2.5">
          <img
            src="/assets/chaser-icon.jpeg"
            alt="Chaser logo"
            className="h-9 w-9 rounded-lg shadow-sm"
          />
          <span className="font-display text-xl font-extrabold tracking-tight text-pine">
            Chaser
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <button
              key={s.hash}
              data-testid={s.testid}
              onClick={() => goToSection(s.hash)}
              className="text-sm font-medium text-sage transition-colors duration-200 hover:text-pine"
            >
              {s.label}
            </button>
          ))}
          <Link
            to="/support"
            data-testid="nav-link-support"
            className="text-sm font-medium text-sage transition-colors duration-200 hover:text-pine"
          >
            Support
          </Link>
          <button
            data-testid="nav-join-beta-button"
            onClick={() => goToSection("beta")}
            className="rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-pinedark"
          >
            Join the Beta
          </button>
        </nav>

        <button
          data-testid="nav-mobile-menu-button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-pine transition-colors duration-200 hover:bg-sand md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-drawer"
          className="border-t border-creamline/60 bg-cream px-4 pb-6 pt-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {SECTIONS.map((s) => (
              <button
                key={s.hash}
                data-testid={`${s.testid}-mobile`}
                onClick={() => goToSection(s.hash)}
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-ink transition-colors duration-200 hover:bg-sand"
              >
                {s.label}
              </button>
            ))}
            <Link
              to="/support"
              data-testid="nav-link-support-mobile"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors duration-200 hover:bg-sand"
            >
              Support
            </Link>
            <button
              data-testid="nav-join-beta-button-mobile"
              onClick={() => goToSection("beta")}
              className="mt-2 rounded-full bg-pine px-5 py-3 text-base font-semibold text-cream transition-colors duration-200 hover:bg-pinedark"
            >
              Join the Beta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
