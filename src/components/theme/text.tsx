import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

interface HeadingProps extends TextProps {
  perma?: string
}

export const H1 = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={cn("text-4xl font-bold mb-5", className)}>{children}</h1>
  );
};

export const H2 = ({ children, className }: HeadingProps) => {
  return (
    <h2 className={cn("text-3xl font-bold mb-3", className)}>{children}</h2>
  );
};

export const H3 = ({ children, className }: HeadingProps) => {
  return (
    <h3 className={cn("text-2xl font-bold mb-2", className)}>{children}</h3>
  );
};

export const H4 = ({ children, className }: HeadingProps) => {
  return (
    <h4 className={cn("text-xl font-bold mb-2", className)}>{children}</h4>
  );
};

export const H5 = ({ children, className }: HeadingProps) => {
  return (
    <h5 className={cn("text-lg font-bold mb-2", className)}>{children}</h5>
  );
};

export const H6 = ({ children, className }: HeadingProps) => {
  return (
    <h6 className={cn("text-base font-bold mb-2", className)}>{children}</h6>
  );
};

export const Lead = ({ children, className }: TextProps) => {
  return <p className={cn("text-lg mb-2", className)}>{children}</p>;
};

export const P = ({ children, className }: TextProps) => {
  return <p className={cn("text-base mb-2", className)}>{children}</p>;
};
