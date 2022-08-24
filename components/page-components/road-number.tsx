type Props = {
  style: string;
  num: string;
  bg?: string;
  textColor?: string;
  border?: string;
  borderStyle?: string;
};

const RoadNumber = ({
  style,
  num,
  bg = "white",
  text = bg === "white" || bg === "gold" ? "black" : "white",
  border = bg,
  borderStyle = "solid",
}: Props) => {
  if (style === "hex") {
    return (
      <HexagonRoadNumber
        style={style}
        num={num}
        backgroundColor={bg}
        textColor={text}
        borderColor={border}
        borderStyle={borderStyle}
      />
    );
  } else if (style === "long-hex") {
    return (
      <LongHexagonRoadNumber
        style={style}
        num={num}
        backgroundColor={bg}
        textColor={text}
        borderColor={border}
        borderStyle={borderStyle}
      />
    );
  } else if (style === "tri") {
    return (
      <TriangleRoadNumber
        style={style}
        num={num}
        backgroundColor={bg}
        textColor={text}
        borderColor={border}
        borderStyle={borderStyle}
      />
    );
  } else {
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

const TriangleRoadNumber = ({
  style,
  num,
  bg,
  text,
  border,
  borderStyle,
}: Props) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold align-text-bottom tabular-nums"
    >
      <svg
        className="-z-10 w-10 absolute"
        viewBox="0 0 140 130"
        xmlns="http://www.w3.org/2000/svg"
        fill={bg}
      >
        <path d="M116.044 79.6928C97.955 111.036 88.9105 126.707 75.9776 129.387C72.0344 130.204 67.9655 130.204 64.0223 129.387C51.0895 126.707 42.045 111.036 23.9561 79.6928C5.88457 48.3799 -3.15117 32.7235 0.994734 20.1949C2.25888 16.3748 4.29295 12.8542 6.97134 9.85064C15.7554 -4.67958e-06 33.8369 -3.15678e-06 70 3.57863e-09C106.163 3.16394e-06 124.245 4.67958e-06 133.029 9.85065C135.707 12.8543 137.741 16.3748 139.005 20.195C143.151 32.7235 134.115 48.3799 116.044 79.6928Z" />
      </svg>

      <span className="flex justify-center w-10 translate-y-0.5">{num}</span>
    </span>
  );
};

const LongHexagonRoadNumber = ({
  style,
  num,
  bg,
  text,
  border,
  borderStyle,
}: Props) => {
  return (
    <span
      style={{
        color: text,
      }}
      className="inline-block font-semibold tabular-nums"
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

const HexagonRoadNumber = ({
  style,
  num,
  bg,
  text,
  border,
  borderStyle,
}: Props) => {
  return (
    <span
      style={{
        borderColor: border,
        borderStyle: borderStyle,
        color: text,
      }}
      className="inline-block font-semibold tabular-nums"
    >
      <svg
        className="-z-10 w-8 absolute"
        viewBox="0 0 146 130"
        xmlns="http://www.w3.org/2000/svg"
        fill={bg}
      >
        <path d="M30.8812 8C33.7393 3.04959 39.0214 1.07385e-06 44.7376 9.87975e-07L101.262 1.3878e-07C106.979 5.29027e-08 112.261 3.04958 115.119 8L143.381 56.9519C146.239 61.9023 146.239 68.0015 143.381 72.9519L115.119 121.904C112.261 126.854 106.979 129.904 101.262 129.904H44.7376C39.0214 129.904 33.7393 126.854 30.8812 121.904L2.6188 72.9519C-0.239322 68.0015 -0.239323 61.9023 2.6188 56.9519L30.8812 8Z" />
      </svg>

      <span className="flex justify-center w-8">{num}</span>
    </span>
  );
};

export default RoadNumber;
