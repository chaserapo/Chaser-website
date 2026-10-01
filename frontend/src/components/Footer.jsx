import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-pinedark text-mist">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src="/assets/chaser-icon.jpeg"
              alt="Chaser logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-display text-2xl font-extrabold tracking-tight text-cream">
              Chaser
            </span>
          </div>
          <p className="mt-4 font-display text-lg font-medium text-mist/80">
            Behind every good operation.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-mist/60">
            A product by Midwest Ag Supplies
            <br />
            ABN 21 510 804 128
            <br />
            Western Australia, Australia
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Contact</p>
          <a
            href="mailto:chaserapp@outlook.com"
            data-testid="footer-email-link"
            className="mt-4 flex items-center gap-2 text-sm text-mist/80 transition-colors duration-200 hover:text-cream"
          >
            <Mail className="h-4 w-4 text-gold" /> chaserapp@outlook.com
          </a>
          <p className="mt-3 flex items-center gap-2 text-sm text-mist/80">
            <MapPin className="h-4 w-4 text-gold" /> Western Australia, Australia
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Legal & Help</p>
          <div className="mt-4 flex flex-col gap-2.5">
            <Link
              to="/privacy"
              data-testid="footer-privacy-link"
              className="text-sm text-mist/80 transition-colors duration-200 hover:text-cream"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              data-testid="footer-terms-link"
              className="text-sm text-mist/80 transition-colors duration-200 hover:text-cream"
            >
              Terms of Use
            </Link>
            <Link
              to="/support"
              data-testid="footer-support-link"
              className="text-sm text-mist/80 transition-colors duration-200 hover:text-cream"
            >
              Support
            </Link>
            <Link
              to="/delete-account"
              data-testid="footer-delete-account-link"
              className="text-sm text-mist/80 transition-colors duration-200 hover:text-cream"
            >
              Delete Account
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-2 border-t border-pineline pt-8 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Midwest Ag Supplies. All rights reserved.</p>
        <p>Launching soon on the App Store.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
