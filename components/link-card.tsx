import Link from "next/link"

type Props = {
  children: React.ReactNode
  title: string
  description: string
  cta: string
  href: string
}

const LinkCard = ({ children, title, description, cta, href }: Props) => {
  return (
    <div className="flex items-stretch py-20 space-x-20">
      <div className="space-y-8 w-1/2">
        <h2 className="text-4xl font-bold font-mono leading-7 text-gray-900">
          {title}
        </h2>
        <p className="text-lg font-mono leading-7 text-gray-900 sm:text-lg">
          {description}
        </p>
        <div>
          <Link href={href}>
            <a className="font-mono leading-7 text-gray-500 hover:text-blue-400 transition-all rounded-lg flex items-center group">
              {cta.toUpperCase()}
              <span className="pl-2 scale-110 translate-x-0 group-hover:translate-x-2 text-gray-500 group-hover:text-blue-400 transition-all">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-1/2 bg-gray-50 rounded-lg drop-shadow-2xl p-3 group hover:bg-blue-300 hover:-rotate-3 hover:scale-105 transition-all">
        <div className="group-hover:opacity-25 transition-all">{children}</div>
        <div className="hidden group-hover:flex absolute inset-0 justify-center items-center self-stretch z-10">
          <Link href={href}>
            <a className="text-lg font-mono leading-7 text-blue-400 py-2 px-4 border-blue-400 border-2 bg-gray-50 hover:bg-blue-50 transition-colors rounded-lg flex items-center">
              {cta}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LinkCard
