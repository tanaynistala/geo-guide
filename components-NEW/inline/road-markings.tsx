type Props = {
  children?: React.ReactNode | React.ReactNode[]
}

const RoadMarkings = ({ children }: Props) => {
  return <div className="bg-gray-700 space-y-2 py-2">{children}</div>
}

const RoadLane = ({ width = 12 }: { width?: number }) => {
  return <div className={`h-${width}`} />
}

const RoadLine = ({
  style = "solid",
  color = "white",
  dashLength,
  spaceLength,
}: {
  style: string
  color: string
  dashLength?: number
  spaceLength?: number
}) => {
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
    />
  )
}

export { RoadMarkings, RoadLane, RoadLine }
