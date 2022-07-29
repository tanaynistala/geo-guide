import Link from "next/link";

type Props = {
  title: string;
  slug: string;
};

const GuidePreview = ({ title, slug }: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/guides/${slug}`} href="/guides/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
  );
};

export default GuidePreview;
