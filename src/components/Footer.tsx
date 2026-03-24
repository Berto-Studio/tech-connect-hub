const Footer = () => (
  <footer className="py-8 bg-dark border-t border-dark-foreground/10">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-dark-foreground/40">
        © {new Date().getFullYear()} MenzTech. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
