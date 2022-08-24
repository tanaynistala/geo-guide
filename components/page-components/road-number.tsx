type Props = {
  style: string;
  number: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderStyle?: string;
};

const RoadNumber = ({
  style,
  number,
  backgroundColor = "white",
  textColor = "black",
  borderColor = "white",
  borderStyle = "solid",
}: Props) => {
  if (style === "hex") {
    return (
      <HexagonRoadNumber
        style={style}
        number={number}
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        borderStyle={borderStyle}
      />
    );
  } else if (style === "long-hex") {
    return (
      <LongHexagonRoadNumber
        style={style}
        number={number}
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        borderStyle={borderStyle}
      />
    );
  } else if (style === "tri") {
    return (
      <TriangleRoadNumber
        style={style}
        number={number}
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        borderStyle={borderStyle}
      />
    );
  }
  return (
    <span
      className="rounded py-0.5 px-1 leading-tight inline-block overflow-clip border-2 align-bottom font-semibold"
      style={{
        borderColor: borderColor,
        borderStyle: borderStyle,
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {number}
    </span>
  );
};

const TriangleRoadNumber = ({
  style,
  number,
  backgroundColor = "white",
  textColor = "black",
  borderColor = "white",
  borderStyle = "solid",
}: Props) => {
  return (
    <span
      style={{
        color: textColor,
      }}
      className="inline-block font-semibold align-text-bottom"
    >
      <svg
        className="-z-10 w-10 absolute"
        viewBox="0 0 140 130"
        xmlns="http://www.w3.org/2000/svg"
        fill={backgroundColor}
      >
        <path d="M116.044 79.6928C97.955 111.036 88.9105 126.707 75.9776 129.387C72.0344 130.204 67.9655 130.204 64.0223 129.387C51.0895 126.707 42.045 111.036 23.9561 79.6928C5.88457 48.3799 -3.15117 32.7235 0.994734 20.1949C2.25888 16.3748 4.29295 12.8542 6.97134 9.85064C15.7554 -4.67958e-06 33.8369 -3.15678e-06 70 3.57863e-09C106.163 3.16394e-06 124.245 4.67958e-06 133.029 9.85065C135.707 12.8543 137.741 16.3748 139.005 20.195C143.151 32.7235 134.115 48.3799 116.044 79.6928Z" />
      </svg>

      <span className="flex justify-center w-10 translate-y-0.5">{number}</span>
    </span>
  );
};

const LongHexagonRoadNumber = ({
  style,
  number,
  backgroundColor = "white",
  textColor = "black",
  borderColor = "white",
  borderStyle = "solid",
}: Props) => {
  return (
    <span
      style={{
        borderColor: borderColor,
        borderStyle: borderStyle,
        color: textColor,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-12 absolute"
        viewBox="0 0 278 160"
        xmlns="http://www.w3.org/2000/svg"
        fill={backgroundColor}
      >
        <path d="M136.269 0.47296C138.076 0.159985 139.924 0.159983 141.731 0.472958L264.295 21.7017C271.964 23.03 277.564 29.6839 277.564 37.4669V122.533C277.564 130.316 271.964 136.97 264.295 138.298L141.731 159.527C139.924 159.84 138.076 159.84 136.269 159.527L13.7053 138.298C6.03651 136.97 0.435928 130.316 0.435928 122.533V37.467C0.435928 29.684 6.03649 23.03 13.7053 21.7017L136.269 0.47296Z" />
      </svg>
      <span className="flex justify-center w-12">{number}</span>
    </span>
  );
};

const HexagonRoadNumber = ({
  style,
  number,
  backgroundColor = "white",
  textColor = "black",
  borderColor = "white",
  borderStyle = "solid",
}: Props) => {
  return (
    <span
      style={{
        borderColor: borderColor,
        borderStyle: borderStyle,
        color: textColor,
      }}
      className="inline-block font-semibold"
    >
      <svg
        className="-z-10 w-8 absolute"
        viewBox="0 0 146 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        fill={backgroundColor}
      >
        <path d="M30.8812 8C33.7393 3.04959 39.0214 1.07385e-06 44.7376 9.87975e-07L101.262 1.3878e-07C106.979 5.29027e-08 112.261 3.04958 115.119 8L143.381 56.9519C146.239 61.9023 146.239 68.0015 143.381 72.9519L115.119 121.904C112.261 126.854 106.979 129.904 101.262 129.904H44.7376C39.0214 129.904 33.7393 126.854 30.8812 121.904L2.6188 72.9519C-0.239322 68.0015 -0.239323 61.9023 2.6188 56.9519L30.8812 8Z" />
      </svg>

      <span className="flex justify-center w-8">{number}</span>
    </span>
  );
};

export default RoadNumber;
