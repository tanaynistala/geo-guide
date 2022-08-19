type Props = {
  style: string;

  code?: string;
  format: string;

  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  rightBandColor?: string;
};

const LicensePlate = ({
  style,
  code,
  format,
  backgroundColor = "white",
  textColor = "black",
  borderColor = "black",
  rightBandColor,
}: Props) => {
  return (
    <span
      className="rounded py-0.5 leading-tight inline-block overflow-clip border-2 align-bottom"
      style={{
        borderColor: borderColor,
      }}
    >
      {code && (
        <span
          className="p-1 font-mono"
          style={{
            backgroundColor: style === "eu" ? "blue" : "white",
            color: style === "eu" ? "white" : "black",
          }}
        >
          {code}
        </span>
      )}
      <span
        className="py-1 px-2 font-semibold"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
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
