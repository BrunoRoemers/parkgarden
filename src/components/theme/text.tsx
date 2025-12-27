interface TextProps {
  children: React.ReactNode;
}

export const H1 = ({ children }: TextProps) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

export const H2 = ({ children }: TextProps) => {
  return <h2 className="text-3xl font-bold">{children}</h2>;
};

export const H3 = ({ children }: TextProps) => {
  return <h3 className="text-2xl font-bold">{children}</h3>;
};

export const H4 = ({ children }: TextProps) => {
  return <h4 className="text-xl font-bold">{children}</h4>;
};

export const H5 = ({ children }: TextProps) => {
  return <h5 className="text-lg font-bold">{children}</h5>;
};

export const H6 = ({ children }: TextProps) => {
  return <h6 className="text-base font-bold">{children}</h6>;
};

export const P = ({ children }: TextProps) => {
  return <p className="text-base">{children}</p>;
};
