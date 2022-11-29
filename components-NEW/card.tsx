type Props = {
  title?: string
  description?: string
}

const Card = ({ title, description }: Props) => {
  return (
    <div className="bg-black/10 rounded-md overflow-hidden">
      <div className="p-2 md:p-4">
        {title && (
          <h4 className="text-sm font-semibold text-black/70 leading-none">
            {title}
          </h4>
        )}
        {description && <div className="text-lg">{description}</div>}
      </div>
    </div>
  )
}

export default Card
