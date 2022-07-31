import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const GuideTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-2 2xl:mb-12 text-left">
      {children}
    </h1>
  );
};

export default GuideTitle;
