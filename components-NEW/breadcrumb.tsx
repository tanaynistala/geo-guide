type Props = {
  items: Array<string>
}

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="flex font-medium text-gray-500">
      {items.map((item) => (
        <>
          {item !== items[0] && (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.75 8.75L14.25 12L10.75 15.25"
              ></path>
            </svg>
          )}
          <span key={item}>{item}</span>
        </>
      ))}
    </div>
  )
}

export default Breadcrumb
