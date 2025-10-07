import React from "react";
import { BlogPost } from "../../lib/mdx";
import LandingNavbar from "../landingPage/LandingNavbar";
import BlogSEO from "./BlogSEO";

interface MDXBlogLayoutProps {
  children: React.ReactNode;
  frontMatter: Omit<BlogPost, 'content'>;
}

export default function MDXBlogLayout({ children, frontMatter }: MDXBlogLayoutProps) {
  const { title, description, image, date, author, slug, tags, readingTime } = frontMatter;

  return (
    <div className="items-center bg-gray-100 md:flex md:flex-col heropattern-hideout-blue-100 theme-default">
      <BlogSEO
        title={title}
        description={description}
        image={image}
        date={date}
        author={author}
        slug={slug}
        tags={tags}
        readingTime={readingTime}
      />
      <LandingNavbar />
      <div className="items-center max-w-5xl gap-4 p-4 bg-white shadow-lg sm:my-8 md:flex md:flex-col md:mx-16">
        <article className="prose prose-lg max-w-none">
          {/* Blog Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
              <span>By {author}</span>
              <span>•</span>
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {readingTime && (
                <>
                  <span>•</span>
                  <span>{readingTime}</span>
                </>
              )}
            </div>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
          </header>

          {/* Blog Content */}
          <div className="prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-orange-500 prose-a:underline hover:prose-a:text-orange-600 prose-strong:text-gray-900 prose-ul:list-disc prose-ol:list-decimal prose-li:mb-2 prose-img:rounded-lg prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-4 prose-blockquote:italic prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto">
            {children}
          </div>

          {/* Blog Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">Written by</p>
                <p className="font-semibold text-gray-900">{author}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">Published on</p>
                <time dateTime={date} className="font-semibold text-gray-900">
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}



