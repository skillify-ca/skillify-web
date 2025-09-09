import { GetStaticProps } from "next";
import Link from "next/link";
import SEO from "../../components/SEO";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
import { BlogPostMeta, getAllBlogPosts } from "../../lib/mdx";

interface BlogIndexProps {
  posts: BlogPostMeta[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <div className="items-center bg-gray-100 md:flex md:flex-col heropattern-hideout-blue-100 theme-default">
      <SEO
        title="Blog | Skillify - Learn to Code and Build Your Career"
        description="Read our latest articles about coding bootcamps, programming education, career advice, and tech industry insights."
        image="https://skillify.ca/images/logo-2.png"
      />
      <LandingNavbar />
      <div className="items-center max-w-5xl gap-4 p-4 bg-white shadow-lg sm:my-8 md:flex md:flex-col md:mx-16">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Skillify Blog
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Discover the latest insights on coding bootcamps, programming education, 
            career development, and tech industry trends.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts found.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="cursor-pointer">
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      )}
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-orange-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <span>By {post.author}</span>
                            <span>•</span>
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </time>
                          </div>
                          {post.readingTime && (
                            <span className="text-orange-600 font-medium">
                              {post.readingTime}
                            </span>
                          )}
                        </div>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                                +{post.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {/* Featured Categories */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Coding Bootcamps", count: posts.filter(p => p.tags?.includes("coding bootcamp")).length },
                { name: "Career Advice", count: posts.filter(p => p.tags?.includes("career")).length },
                { name: "Programming Education", count: posts.filter(p => p.tags?.includes("programming education")).length },
                { name: "Tech Industry", count: posts.filter(p => p.tags?.includes("tech")).length },
              ].map((category) => (
                <div
                  key={category.name}
                  className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {category.count} article{category.count !== 1 ? 's' : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

// Use a custom layout that doesn't include the student portal layout
BlogIndex.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};