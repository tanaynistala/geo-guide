type Props = {
  style: string;

  code?: string;
  codeColor?: string;
  format: string;

  bg?: string;
  text?: string;
  border?: string;
  borderStyle?: string;
  rightBandColor?: string;
};

const LicensePlate = ({
  style,
  code,
  codeColor = "black",
  format,
  bg = "white",
  text = "black",
  border = "black",
  borderStyle = "solid",
  rightBandColor,
}: Props) => {
  return (
    <span
      className="rounded py-0.5 leading-tight inline-block overflow-clip border-2 align-bottom"
      style={{
        borderColor: border,
        borderStyle: borderStyle,
      }}
    >
      {code && (
        <span
          className="p-1 font-mono font-bold"
          style={{
            backgroundColor: style === "eu" ? "blue" : "white",
            color: style === "eu" ? "white" : codeColor,
          }}
        >
          {code}
        </span>
      )}
      <span
        className="py-1 px-2 font-semibold"
        style={{
          backgroundColor: bg,
          color: text,
        }}
      >
        {format}
      </span>

      {rightBandColor && (
        <span
          className="p-1 font-mono"
          style={{
            backgroundColor: rightBandColor,
            color: rightBandColor,
          }}
        >
          #
        </span>
      )}
    </span>
  );
};

export default LicensePlate;
