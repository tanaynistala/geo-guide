type Props = {
  children?: React.ReactNode | React.ReactNode[]
  bg: string
}

const RoadMarkings = ({ children, bg = "black" }: Props) => {
  return <div className="bg-gray-700 space-y-2 py-2">{children}</div>
}

export default RoadMarkings
