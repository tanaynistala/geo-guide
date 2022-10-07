import { ReactNode } from "react"

type Props = {
  text: string
}

export const Title = ({ text }: Props) => {
  return (
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-left mb-4">
      {text}
    </h1>
  )
}

export const Subtitle = ({ text }: Props) => {
  return (
    <p className="text-lg leading-relaxed mb-4 font-mono italic opacity-70 mb-8">
      {text}
    </p>
  )
}
