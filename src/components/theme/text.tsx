import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TextProps) => {
  return <h1 className={cn("text-4xl font-bold", className)}>{children}</h1>;
};

export const H2 = ({ children, className }: TextProps) => {
  return <h2 className={cn("text-3xl font-bold", className)}>{children}</h2>;
};

export const H3 = ({ children, className }: TextProps) => {
  return <h3 className={cn("text-2xl font-bold", className)}>{children}</h3>;
};

export const H4 = ({ children, className }: TextProps) => {
  return <h4 className={cn("text-xl font-bold", className)}>{children}</h4>;
};

export const H5 = ({ children, className }: TextProps) => {
  return <h5 className={cn("text-lg font-bold", className)}>{children}</h5>;
};

export const H6 = ({ children, className }: TextProps) => {
  return <h6 className={cn("text-base font-bold", className)}>{children}</h6>;
};

export const P = ({ children, className }: TextProps) => {
  return <p className={cn("text-base", className)}>{children}</p>;
};
