import GuideTitle from "./guide-title";
import Country from "../../interfaces/country";

type Props = {
  title: string;
};

const GuideHeader = ({ title }: Props) => {
  return (
    <>
      <GuideTitle title={title} />
    </>
  );
};

export default GuideHeader;
