const Flag = ({ code2, name }) => {
  return (
    <div className="p-1 bg-gray-100 rounded-lg">
      <img
        src={`https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${code2.toLowerCase()}.svg`}
        alt={`Flag of ${name}`}
        className="rounded-md"
      />
    </div>
  )
}

export default Flag
