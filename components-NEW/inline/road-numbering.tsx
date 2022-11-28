type Props = {
  num: number
  bgColor: string
  textColor?: string
  borderColor?: string
  borderStyle?: string
  shield?: string
}

const RoadNumber = ({
  num,
  bgColor = "white",
  textColor,
  borderColor,
  borderStyle,
}: Props) => {
  return (
    <span
      className="inline-block rounded-md font-semibold tabular-nums leading-5 px-1"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor ?? "white",
        borderStyle: borderStyle ?? (borderColor ? "solid" : "double"),
        borderWidth: borderStyle || borderColor ? "2px" : "5px",
        color:
          textColor ??
          (bgColor === "white" || bgColor === "gold" ? "black" : "white"),
      }}
    >
      {num}
    </span>
  )
}

export default RoadNumber
