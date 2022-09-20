type Props = {
  children?: React.ReactNode | React.ReactNode[]
}

const RoadMarkings = ({ children }: Props) => {
  return <div className="bg-gray-700 space-y-2 py-2">{children}</div>
}

export default RoadMarkings
