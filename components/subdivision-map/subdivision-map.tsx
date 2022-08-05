import Map from "./map";
import List from "./list";
import Link from "next/link";

const SubdivisionMap = ({ countryCode, scale }) => {
  return (
    <div className="mb-4 lg:mb-8 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-x-8">
      <div className="mt-4 lg:mt-0 lg:block">
        <List countryCode={countryCode} />
      </div>
      <div className="col-span-3 mb-4">
        <Map countryCode={countryCode} scale={scale} />
      </div>
    </div>
  );
};

export default SubdivisionMap;
