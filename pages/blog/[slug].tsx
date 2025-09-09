import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import MDXBlogLayout from '../../components/blog/MDXBlogLayout';
import { MDXComponents } from '../../components/blog/MDXComponents';
import { BlogPost, getAllBlogSlugs, getBlogPost } from '../../lib/mdx';

interface BlogPostPageProps {
  post: Omit<BlogPost, 'content'>;
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPostPage({ post, mdxSource }: BlogPostPageProps) {
  return (
    <MDXBlogLayout frontMatter={post}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </MDXBlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllBlogSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
  });

  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        image: post.image,
        tags: post.tags,
        readingTime: post.readingTime,
      },
      mdxSource,
    },
  };
};

// Use a custom layout that doesn't include the student portal layout
BlogPostPage.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};
