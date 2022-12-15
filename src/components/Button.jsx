import { clsx } from "clsx";

export default function Button({
  children,
  className,
  variant = "primary",
  hover = true,
  size = "default",
}) {
  const buttonStyles = clsx(
    `rounded-md px-4 py-2 inline-block cursor-pointer transition-all ease-in-out duration-300 font-bold text-white ${className}`,
    {
      "bg-primary text-slate-800": variant === "primary",
      "hover:bg-secondary": hover === true,
      "px-4 py-2": size === "default",
      "px-6 py-3": size === "md",
      "px-8 py-4": size === "lg",
    }
  );
  return <button className={buttonStyles}>{children}</button>;
}
