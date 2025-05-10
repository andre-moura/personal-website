import ReactCountryFlag from "react-country-flag"

interface FlagIconProps {
  country: string
  size?: number
}

export default function FlagIcon({ country, size = 24 }: FlagIconProps) {
  return (
    <ReactCountryFlag
      countryCode={country}
      svg
      style={{
        width: size,
        height: "auto",
        borderRadius: "2px",
        objectFit: "cover",
      }}
    />
  )
}