import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div className="rounded-lg p-4 bg-gray-100 space-y-2">
      <div className="flex items-center text-sm font-medium text-gray-500 leading-tight md:leading-none">
        {title}
      </div>
      <div className="text-lg leading-none">{children}</div>
    </div>
  );
};

export default Card;
