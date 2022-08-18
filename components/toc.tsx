import ReactNode from "react";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

export default function TOC({ children }: Props) {
  const [visibility, setVisibility] = useState(true);

  return (
    <div className="p-2 bg-gray-100 rounded-lg mb-8 font-mono">
      <div className="flex flex-row items-center justify-between text-gray-500">
        <h6 className="ml-2 md:my-2 text-sm font-medium leading-tight md:leading-none">
          Table of Contents
        </h6>
        <button
          className="p-1 hover:bg-gray-200 rounded"
          onClick={() => setVisibility(!visibility)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className={`${
              visibility ? "rotate-180" : "rotate-0"
            } transition-transform`}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </button>
      </div>
      <div className="px-4 md:mx-4">{visibility && children}</div>
    </div>
  );
}
