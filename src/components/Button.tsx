import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  type?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
};

const blue = "bg-primary text-mininoWhite hover:bg-primary/90";
const yellow = "bg-secondary text-mininoBlack hover:bg-secondary/90";
const white = "bg-mininoWhite text-mininoBlack hover:bg-mininoWhite/90";
const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type,
  className,
  size,
}) => {
  let color: string;
  switch (type) {
    case "primary":
      color = yellow;
      break;
    case "secondary":
      color = blue;
      break;
    default:
      color = white;
      break;
  }
  return (
    <a
      href={href}
      className={`${color} inline-block rounded-lg ${
        size === "sm" ? "px-4 py-2" : "px-8 py-3"
      } text-center text-sm font-semibold outline-none ring-accent transition duration-100 focus-visible:ring md:text-base ${
        className ?? ""
      }`}
    >
      {children}
    </a>
  );
};

export default Button;
