type Props = {
  width: number
}

const RoadLane = ({ width = 12 }: Props) => {
  return <div className={`h-${width}`} />
}

export default RoadLane
