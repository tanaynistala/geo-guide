type Props = {
  style: string
  color: string
  dashLength?: number
  spaceLength?: number
}

const RoadLine = ({
  style = "solid",
  color = "white",
  dashLength,
  spaceLength,
}: Props) => {
  return (
    <div
      className="h-2"
      style={{
        background:
          style === "solid"
            ? color
            : `repeating-linear-gradient(to right,${color} 0,${color} ${dashLength}px,transparent ${dashLength}px,transparent ${
                dashLength + spaceLength
              }px)`,
      }}
    ></div>
  )
}

export default RoadLine
