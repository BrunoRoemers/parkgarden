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

  return (
    <a href={`#${perma}`} className="group relative">
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
