import ByteSpaceLogo from "../logos/ByteSpaceLogo";

const linkColumns = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-8 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Newsletter */}
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <ByteSpaceLogo />
              <p className="font-black text-2xl">ByteSpace</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-neutral-500">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="h-12 w-full flex-1 rounded-full border border-neutral-200 bg-white px-5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-400"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#d9f54c] px-7 text-sm font-semibold text-neutral-900 transition-opacity hover:opacity-90"
              >
                Search
              </button>
            </form>
            <p className="mt-4 text-xs leading-relaxed text-neutral-400">
              By subscribing, you agree to our{" "}
              <a
                href="#"
                className="underline underline-offset-2 hover:text-neutral-600"
              >
                Privacy Policy
              </a>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400">
            © 2023 ByteSpace. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
