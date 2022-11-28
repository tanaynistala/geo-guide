import ReactNode from "react"

type Props = {
  title: string
  children?: React.ReactNode
}

const Card = ({ title, children }: Props) => {
  return (
    <div className="rounded-xl p-4 bg-gray-100 space-y-2">
      <div className="text-sm font-medium text-gray-500 leading-none">
        {title}
      </div>
      <div className="text-lg leading-none">{children}</div>
    </div>
  )
}

export default Card
