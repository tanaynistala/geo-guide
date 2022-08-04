import { ReactNode } from "react";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-left mb-8">
      {title}
    </h1>
  );
};
