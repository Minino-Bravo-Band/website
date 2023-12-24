import * as React from "react";
import Container from "./Container";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-primary/90 backdrop-blur ">
      <Container>
        <section className="flex items-center justify-between py-4 md:py-8">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-mininoWhite md:text-3xl"
            aria-label="logo"
          >
            <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-secondary"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Minino Bravo
          </a>

          <nav className="hidden gap-12 lg:flex">
            <a
              href="#"
              className="text-lg font-semibold text-mininoWhite transition duration-100 hover:text-secondary active:text-indigo-700"
            >
              Albums
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-mininoWhite transition duration-100 hover:text-secondary active:text-indigo-700"
            >
              Concerts
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-mininoWhite transition duration-100 hover:text-secondary active:text-indigo-700"
            >
              About Us
            </a>
          </nav>

          <Button href="#" className="hidden lg:inline-block">
            Get in Touch
          </Button>

          <Button
            href=""
            className="inline-flex items-center gap-2 lg:hidden"
            size="sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </Button>
        </section>
      </Container>
    </header>
  );
};
export default Navbar;
