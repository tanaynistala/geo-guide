import GuideTitle from "./guide-title";
import Country from "../../interfaces/country.ts";

type Props = {
  title: string;
};

const GuideHeader = ({ title }: Props) => {
  return (
    <>
      <GuideTitle>{title}</GuideTitle>
    </>
  );
};

export default GuideHeader;
