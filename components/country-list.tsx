import Link from "next/link";
import { getCategorizedCountries } from "../lib/geo-api";
import { useState } from "react";

export default function CountryList({ country = "" }) {
  const [query, setQuery] = useState("");

  return (
    <div className="overflow-y-auto shrink max-h-96 lg:max-h-[32rem] bg-gray-100 rounded-xl snap-y snap-mandatory scroll-py-12 pb-2">
      <input
        type="text"
        className="py-2 px-4 outline-none w-full bg-gray-100 grow active:bg-gray-200 h-12 focus:bg-gray-200 font-mono snap-start sticky top-0"
        id="search"
        name="search"
        placeholder="Search..."
        key={"Search"}
        onChange={(e) => setQuery(e.target.value)}
      />

      {getCategorizedCountries().map(({ continent, features }) => (
        <>
          <h3
            className="snap-start sticky top-12 px-4 py-2 -scroll-m-2 bg-gray-200 text-gray-500 font-serif font-bold"
            key={continent}
          >
            {continent}
          </h3>
          {features
            .filter((feature) => {
              return query == ""
                ? true
                : feature.properties.name_long
                    .toLowerCase()
                    .includes(query.toLowerCase());
            })
            .map((feature) => (
              <Link
                href={`/countries/${feature.properties.adm0_a3}`}
                key={feature.properties.adm0_a3}
              >
                <a
                  className={`block p-2 m-2 text-sm ${
                    country == feature.properties.adm0_a3
                      ? "text-blue-500 bg-blue-200"
                      : "hover:text-blue-500 hover:bg-gray-200"
                  } rounded-lg font-mono cursor-pointer snap-start`}
                >
                  {feature.properties.admin}
                </a>
              </Link>
            ))}
        </>
      ))}
    </div>
  );
}
