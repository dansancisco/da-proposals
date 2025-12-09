import clsx from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CTAButtonProps = {
  href?: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function CTAButton({
  href,
  children,
  icon,
  variant = "primary",
  className,
  ...props
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-4 px-10 py-4 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-0";

  const variants = {
    primary: "bg-signal text-white hover:bg-black",
    secondary: "bg-black text-white hover:bg-signal hover:text-white border border-black",
    light: "bg-white text-black hover:bg-signal hover:text-white",
  };

  const merged = clsx(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={merged}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button className={merged} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
