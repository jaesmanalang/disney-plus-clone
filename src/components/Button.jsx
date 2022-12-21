import { forwardRef } from "react";
import { clsx } from "clsx";

export default function Button({
  children,
  className,
  variant = "primary",
  hover = true,
  size = "default",
}) {
  const buttonStyles = clsx(
    `rounded-md px-4 py-2 inline-block cursor-pointer transition-all ease-in-out duration-300 font-bold text-inherit ${className}`,
    {
      "bg-primary text-black": variant === "primary",
      "bg-secondary text-white": variant === "secondary",
      "hover:bg-hover hover:text-white": hover === true,
      "px-4 py-2": size === "default",
      "px-6 py-3": size === "md",
      "px-4 py-2 md:px-8 md:py-4": size === "lg",
    }
  );
  return <button className={buttonStyles}>{children}</button>;
}
