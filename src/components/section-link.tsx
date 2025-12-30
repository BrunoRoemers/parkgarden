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
          "absolute hidden -translate-x-full pr-1 group-hover:inline",
          className,
        )}
      >
        #
      </span>
      {children}
    </a>
  );
};
