import Link from "next/link";
import { useState } from "react";
import subdivisionData from "../../lib/geo-data/subdivisions.json";
import { getCountryData } from "../../lib/geo-api.ts";

const List = ({ countryCode }) => {
  const [query, setQuery] = useState("");

  const country = getCountryData(countryCode);
  const subdivisions = subdivisionData.find(
    (geo) => geo.countryShortCode === country.code2
  ).regions;

  return (
    <>
      <input
        type="text"
        className="py-2 px-4 outline-none w-full bg-gray-100 grow rounded-xl active:bg-gray-200 h-12 focus:bg-gray-200 font-mono"
        id="search"
        name="search"
        placeholder="Search..."
        key={"Search"}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="prose">
        {subdivisions
          .filter((subdivision) => {
            return query == ""
              ? true
              : subdivision.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((subdivision) => (
            <li>
              {subdivision.name}
              <code>{subdivision.shortCode}</code>
            </li>
          ))}
      </div>
    </>
  );
};

export default List;
