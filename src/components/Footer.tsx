import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-white/15 px-8 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <Link to="/" className="font-display text-2xl text-primary">
            Bharatecovolt
          </Link>
          <p className="text-foreground/80 text-sm">
            Energizing the future of mobility.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-foreground/80">
            Email:{" "}
            <a
              href="mailto:bharatecovolt@gmail.com"
              className="text-primary hover:underline"
            >
              bharatecovolt@gmail.com
            </a>
          </p>
          <p className="text-foreground/80">
            Phone:{" "}
            <a
              href="tel:+919652172211"
              className="text-primary hover:underline"
            >
              +91 96521 72211
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-foreground/60 max-w-7xl mx-auto">
        © 2026 Bharatecovolt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
