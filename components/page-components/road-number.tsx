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
  borderColor = backgroundColor,
  borderStyle = "solid",
}: Props) => {
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

export default RoadNumber;
