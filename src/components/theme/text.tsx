import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

interface HeadingProps extends TextProps {
  perma?: string;
}

export const H1 = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={cn("mb-5 text-4xl font-bold", className)}>{children}</h1>
  );
};

export const H2 = ({ children, className }: HeadingProps) => {
  return (
    <h2 className={cn("mb-3 text-3xl font-bold", className)}>{children}</h2>
  );
};

export const H3 = ({ children, className }: HeadingProps) => {
  return (
    <h3 className={cn("mb-2 text-2xl font-bold", className)}>{children}</h3>
  );
};

export const H4 = ({ children, className }: HeadingProps) => {
  return (
    <h4 className={cn("mb-2 text-xl font-bold", className)}>{children}</h4>
  );
};

export const H5 = ({ children, className }: HeadingProps) => {
  return (
    <h5 className={cn("mb-2 text-lg font-bold", className)}>{children}</h5>
  );
};

export const H6 = ({ children, className }: HeadingProps) => {
  return (
    <h6 className={cn("mb-2 text-base font-bold", className)}>{children}</h6>
  );
};

export const Lead = ({ children, className }: TextProps) => {
  return <p className={cn("mb-2 text-lg", className)}>{children}</p>;
};

export const P = ({ children, className }: TextProps) => {
  return <p className={cn("mb-2 text-base", className)}>{children}</p>;
};
