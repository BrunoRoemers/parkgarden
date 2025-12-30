"use client";

import { cn } from "@/lib/utils";

export interface Props {
  perma?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionLink = ({ perma, children, className }: Props) => {
  if (!perma) {
    return children;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(`${e.currentTarget.href}`);
    }
  };

  return (
    <a href={`#${perma}`} className="group relative" onClick={handleClick}>
      <span
        className={cn(
          "absolute -translate-x-full pr-1 opacity-0 transition-opacity group-hover:opacity-20",
          className,
        )}
      >
        #
      </span>
      {children}
    </a>
  );
};
