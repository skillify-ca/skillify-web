import { Head } from "next/document";

type SEOProps = {
  title: string;
  description: string;
  image: string;
};
export default function SEO(props: SEOProps) {
  const { title, description, image } = props;
  return (
    <Head>
      <title>{title} | App</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
    </Head>
  );
}
