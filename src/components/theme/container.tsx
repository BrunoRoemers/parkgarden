import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Narrow = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("px-8 max-w-2xl mx-auto", className)}>{children}</div>
  );
};

export const Wide = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("px-8 max-w-4xl mx-auto", className)}>{children}</div>
  );
};

export const Full = ({ children, className }: ContainerProps) => {
  return <div className={cn("px-8", className)}>{children}</div>;
};
