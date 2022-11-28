type Props = {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
}

const Card = ({ title, description, imageSrc, imageAlt }: Props) => {
  return (
    <div className="max-w-sm md:max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0 p-1">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover h-48 w-full md:h-full md:w-64 rounded-sm overflow-hidden"
            />
          )}
        </div>

        {title && description && (
          <div className="p-2 md:p-4">
            {title && (
              <h4 className="text-sm font-semibold text-gray-700 leading-none">
                {title}
              </h4>
            )}
            {description && <div className="text-lg">{description}</div>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card

{
  /* <div className="">
	{imageSrc && imageAlt && (
		<div className="">
			<img src={imageSrc} alt={imageAlt} className="" />
		</div>
	)}

	<div className="">
		{title && <h4 className="">{title}</h4>}

		{description && <div className="">{description}</div>}
	</div>
</div> */
}
