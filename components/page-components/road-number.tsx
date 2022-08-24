type Props = {
  style: string;
  num: string;
  code?: string;
  bg?: string;
  textColor?: string;
  border?: string;
  borderStyle?: string;
};

const RoadNumber = ({
  style,
  num,
  code = "",
  bg = "white",
  text = bg === "white" || bg === "gold" ? "black" : "white",
  border = bg,
  borderStyle = "solid",
}: Props) => {
  var shield = "";
  switch (style) {
    case "tri":
      return (
        <TriangleRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    case "diamond":
      return (
        <DiamondRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
          code={code}
        />
      );

    case "pent":
      return (
        <PentagonRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
          code={code}
        />
      );

    case "hex":
      return (
        <HexagonRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    case "long-hex":
      return (
        <LongHexagonRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    case "bullet":
      return (
        <BulletRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    case "round-bullet":
      return (
        <RoundBulletRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    case "square-bullet":
      return (
        <SquareBulletRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    case "french-shield":
      return (
        <FrenchShieldRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
          code={code}
        />
      );

    case "flower":
      return (
        <FlowerRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    case "shield":
      return (
        <ShieldRoadNumber
          style={style}
          num={num}
          bg={bg}
          text={text}
          border={border}
        />
      );

    default:
      return (
        <span
          className="rounded m-0 px-1 leading-tight inline-block border-2 font-semibold tabular-nums"
          style={{
            borderColor: border,
            borderStyle: borderStyle,
            backgroundColor: bg,
            color: text,
          }}
        >
          {num}
        </span>
      );
  }
};

const TriangleRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 p-px absolute"
        viewBox="-2 -2 104 102"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M82.8885 62.398C69.9678 84.5793 63.5075 95.6699 54.2697 97.5663C51.4532 98.1446 48.5468 98.1446 45.7302 97.5663C36.4925 95.6699 30.0322 84.5793 17.1115 62.398C4.20327 40.2381 -2.25084 29.1582 0.710525 20.2918C1.61349 17.5883 3.06639 15.0969 4.97953 12.9712C11.2539 6 24.1692 2 50 2C75.8308 2 88.7461 6 95.0205 12.9712C96.9336 15.0969 98.3865 17.5883 99.2895 20.2918C102.251 29.1582 95.7967 40.2381 82.8885 62.398Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

const DiamondRoadNumber = ({ style, num, bg, text, border, code }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute -translate-y-0.5"
        viewBox="-2 -2 104 104"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M46.0544 1.63431C48.2335 -0.544767 51.7665 -0.54477 53.9456 1.6343L98.3657 46.0544C100.545 48.2335 100.545 51.7665 98.3657 53.9456L53.9456 98.3657C51.7665 100.545 48.2335 100.545 46.0544 98.3657L1.63431 53.9456C-0.544767 51.7665 -0.54477 48.2335 1.6343 46.0544L46.0544 1.63431Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span
        className="absolute leading-none flex justify-center w-8"
        style={{
          fontSize: "0.5rem",
        }}
      >
        {code}
      </span>
      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

const PentagonRoadNumber = ({ style, num, bg, text, border, code }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute -translate-y-0.5"
        viewBox="-2 -2 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.1375 3.24721C47.2295 0.250931 52.7705 0.250928 56.8625 3.24721L95.1865 31.3091C99.2785 34.3053 100.991 39.6164 99.4278 44.4645L84.7893 89.8695C83.2263 94.7176 78.7435 98 73.6855 98H26.3145C21.2565 98 16.7737 94.7176 15.2107 89.8695L0.572222 44.4645C-0.990789 39.6164 0.721476 34.3053 4.81349 31.3091L43.1375 3.24721Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span
        className="absolute leading-none flex justify-center w-8 translate-y-0.5"
        style={{
          fontSize: "0.5rem",
        }}
      >
        {code}
      </span>
      <span className="flex justify-center w-8 translate-y-1">{num}</span>
    </span>
  );
};

const HexagonRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute -translate-y-0.5"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6383 14.0363C22.4909 9.06544 27.7843 6 33.5156 6L65.4844 6C71.2157 6 76.5091 9.06544 79.3617 14.0363L95.4299 42.0363C98.2602 46.9683 98.2602 53.0318 95.4299 57.9637L79.3617 85.9637C76.5091 90.9346 71.2157 94 65.4844 94H33.5156C27.7843 94 22.4909 90.9346 19.6382 85.9637L3.57006 57.9637C0.73981 53.0318 0.739815 46.9682 3.57007 42.0363L19.6383 14.0363Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

const LongHexagonRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-12 absolute"
        viewBox="0 0 278 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M141.048 4.41428L263.612 25.643C269.364 26.6392 273.564 31.6297 273.564 37.4669V122.533C273.564 128.37 269.364 133.361 263.612 134.357L141.048 155.586C139.693 155.82 138.307 155.82 136.952 155.586L14.388 134.357C8.63636 133.361 4.43593 128.37 4.43593 122.533V37.4669C4.43593 31.6297 8.63635 26.6392 14.388 25.643L136.952 4.41428C138.307 4.17954 139.693 4.17954 141.048 4.41428Z"
          fill={bg}
          stroke={border}
          stroke-width="8"
        />
      </svg>

      <span className="flex justify-center w-12">{num}</span>
    </span>
  );
};

const BulletRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute"
        viewBox="-2 -2 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.36727 3.84858C7.35713 1.51535 9.64608 0 12.1806 0H87.8194C90.3539 0 92.6429 1.51535 93.6327 3.84858V3.84858C108.407 38.6741 93.2996 78.9688 59.2713 95.4968L51.5548 99.2448C50.5731 99.7216 49.4269 99.7216 48.4452 99.2448L40.7287 95.4968C6.70041 78.9688 -8.40718 38.6741 6.36727 3.84858V3.84858Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

const RoundBulletRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute"
        viewBox="-2 -2 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0C3.58172 0 0 3.58172 0 8V50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50V8C100 3.58172 96.4183 0 92 0H8Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

const SquareBulletRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2H92C95.3137 2 98 4.68629 98 8V78.1604C98 80.7696 96.3137 83.0797 93.8287 83.8749L51.8287 97.3149C50.6393 97.6955 49.3607 97.6955 48.1713 97.3149L6.17135 83.8749C3.68627 83.0797 2 80.7696 2 78.1604V8C2 4.68629 4.68629 2 8 2Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

const FrenchShieldRoadNumber = ({ style, num, bg, text, border, code }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2H92C95.3137 2 98 4.68629 98 8V86C98 89.3137 95.3137 92 92 92H58.747C55.7792 92 52.9647 93.3182 51.0648 95.5982L50 96.8759L48.9352 95.5982C47.0353 93.3182 44.2208 92 41.253 92H8C4.68629 92 2 89.3137 2 86V8C2 4.68629 4.68629 2 8 2Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
        <line
          y1="36"
          x2="100"
          y2="36"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>
      <span className="absolute text-xs flex justify-center w-8 -translate-y-0.5">
        {code}
      </span>

      <span className="flex justify-center w-8 translate-y-1.5">{num}</span>
    </span>
  );
};

const FlowerRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute -translate-y-0.5"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.8614 21.0544L71.15 23.1037L73.1882 22.7452C97.285 18.5077 107.994 51.604 86.0857 62.235L84.2147 63.1429L85.1949 64.977C96.6266 86.3688 68.4475 106.927 51.4361 89.3777L50 87.8963L48.5639 89.3777C31.5526 106.927 3.37335 86.3688 14.8051 64.977L15.7853 63.1429L13.9143 62.235C-7.99352 51.604 2.71501 18.5077 26.8118 22.7452L28.85 23.1037L29.1386 21.0544C32.5296 -3.01815 67.4704 -3.01815 70.8614 21.0544Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

const ShieldRoadNumber = ({ style, num, bg, text, border }) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute -translate-y-0.5"
        viewBox="-2 -2 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0V0C57.5 10 72.5 10 80 0V0L100 20L94.0166 31.9669C91.4617 37.0765 91.2139 43.0348 93.3356 48.3389L97.2202 58.0505C101.814 69.5351 94.9863 82.3943 82.8993 85.0219L65.74 88.7522C61.9925 89.5669 58.5582 91.4418 55.8464 94.1536L50 100L44.1536 94.1536C41.4418 91.4418 38.0075 89.5669 34.26 88.7522L17.1007 85.0219C5.01372 82.3943 -1.81406 69.5352 2.77978 58.0506L6.66442 48.3389C8.78608 43.0348 8.53825 37.0765 5.98343 31.9669L0 20L20 0V0C27.5 10 42.5 10 50 0V0Z"
          fill={bg}
          stroke={border}
          stroke-width="4"
        />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

export default RoadNumber;
