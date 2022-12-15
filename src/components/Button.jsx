import { clsx } from "clsx";

export default function Button({
  children,
  className,
  variant = "primary",
  hover = true,
}) {
  const buttonStyles = clsx(
    `rounded-md px-4 py-2 inline-block cursor-pointer transition-all ease-in-out duration-300 ${className}`,
    {
      "bg-white text-slate-800": variant === "primary",
      "bg-secondary text-white": variant === "secondary",
      "hover:scale-105": hover === true,
    }
  );
  return <button className={buttonStyles}>{children}</button>;
}
