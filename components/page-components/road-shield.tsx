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
      className="inline-block font-semibold"
    >
      <object
        type="image/svg+xml"
        data={shield}
        className="-z-10 w-10 absolute -translate-y-2.5"
      />

      <span className={`flex justify-center w-10 font-sans ${offset}`}>
        {num}
      </span>
    </span>
  );
};

export default RoadShield;
