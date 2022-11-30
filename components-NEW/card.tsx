type Props = {
  title?: string
  children: React.ReactNode
}

const Card = ({ title, children }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
      <div className="p-2 md:p-4 h-full">
        {title && (
          <h4 className="text-sm font-semibold text-black/50 leading-none">
            {title}
          </h4>
        )}

        <div className="mt-2 h-full">{children}</div>
      </div>
    </div>
  )
}

export default Card
