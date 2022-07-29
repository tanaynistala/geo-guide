import GuideTitle from "./guide-title";

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
