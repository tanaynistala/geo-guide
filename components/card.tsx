import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div className="rounded-lg p-4 bg-gray-100 space-y-2">
      <div className="flex items-center text-lg font-medium text-gray-500 leading-tight md:leading-none mx-1 pb-2">
        {title}
      </div>
      {children}
    </div>
  );
};

export default Card;
