type Props = {
  shield: string;
  num: string;
  color?: string;
  offset?: string;
};

const RoadShield = ({ shield, num, color = "black", offset = "" }: Props) => {
  return (
    <span
      style={{
        color: color,
      }}
      className="inline-block font-semibold justify-center w-10 font-sans"
    >
      <object
        type="image/svg+xml"
        data={shield}
        className="-z-10 w-10 absolute -translate-y-2.5"
      />
    </span>
  );
};

export default RoadShield;
