type Props = {
  style?: string

  code?: string
  codeColor?: string

  format: string
  bgColor?: string
  textColor?: string

  rightBandColor?: string

  borderColor?: string
  borderStyle?: string
}

const LicensePlate = ({
  style,
  code,
  codeColor = "black",
  format,
  bgColor = "white",
  textColor = "black",
  rightBandColor,
  borderColor = "black",
  borderStyle = "solid",
}: Props) => {
  return (
    <span
      className="rounded border-2 tracking-tight inline-flex bg-clip-padding leading-5"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor,
        borderStyle,
        // borderWidth: borderStyle === "solid" ? "2px" : "4px",
        // borderRadius: borderStyle === "solid" ? "0.25rem" : "0.375rem",
      }}
    >
      {code && (
        <span
          className="font-bold px-0.5 rounded-l-sm"
          style={{
            backgroundColor: style === "eu" ? "blue" : bgColor,
            color: style === "eu" ? "white" : codeColor,
          }}
        >
          <span className="font-mono text-xs">{code}</span>
        </span>
      )}

      <span className="font-semibold px-1">{format}</span>

      {rightBandColor && (
        <span
          className="px-0.5 rounded-r-sm"
          style={{
            backgroundColor: rightBandColor,
            color: rightBandColor,
          }}
        >
          #
        </span>
      )}
    </span>
  )
}

export default LicensePlate
