import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
  image: string;
};
export default function SEO(props: SEOProps) {
  const { title, description, image } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://skillify.ca/" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
