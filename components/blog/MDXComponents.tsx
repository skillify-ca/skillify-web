import Image from "next/image";

// Custom Image component with optimization
const CustomImage = ({ src, alt, ...props }: any) => {
  return (
    <div className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg shadow-md"
        {...props}
      />
    </div>
  );
};

// Custom Link component
const CustomLink = ({ href, children, ...props }: any) => {
  const isExternal = href?.startsWith('http');
  
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="text-orange-500 underline hover:text-orange-600 transition-colors"
      {...props}
    >
      {children}
    </a>
  );
};

// Custom Code Block component
const CustomCode = ({ children, className, ...props }: any) => {
  const isInline = !className;
  
  if (isInline) {
    return (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    );
  }

  return (
    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6" {...props}>
      <code className={className}>{children}</code>
    </pre>
  );
};

// Custom Blockquote component
const CustomBlockquote = ({ children, ...props }: any) => {
  return (
    <blockquote
      className="border-l-4 border-orange-500 pl-4 py-2 my-6 italic text-gray-700 bg-orange-50"
      {...props}
    >
      {children}
    </blockquote>
  );
};

// Table of Contents component
interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg my-6">
      <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className={`ml-${(item.level - 1) * 4}`}>
            <a
              href={`#${item.id}`}
              className="text-orange-400 underline hover:text-orange-600 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Competitor/Alternative Section component
interface CompetitorSectionProps {
  title: string;
  id: string;
  index?: number;
  image: string;
  description: string;
  features: string[];
  benefits: string[];
  downsides?: string[];
  pricing: string;
}

export const CompetitorSection = ({
  title,
  id,
  image,
  index,
  description,
  features,
  benefits,
  downsides,
  pricing,
}: CompetitorSectionProps) => (
  <div id={id} className="my-8 p-6 border border-gray-200 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">
      {index ? `${index}.` : ""} {title}
    </h2>
    <img className="w-64 mb-4 rounded-lg shadow-md" src={image} alt={title} />
    <p className="whitespace-pre-wrap mb-4 text-gray-700 leading-relaxed">{description}</p>
    
    <h3 className="mt-6 mb-3 text-xl font-semibold">Features</h3>
    <ul className="list-disc list-inside space-y-1 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-700">{feature}</li>
      ))}
    </ul>
    
    <h3 className="mt-6 mb-3 text-xl font-semibold text-green-700">Benefits</h3>
    <ul className="list-disc list-inside space-y-1 mb-4">
      {benefits.map((benefit, index) => (
        <li key={index} className="text-gray-700">{benefit}</li>
      ))}
    </ul>
    
    {downsides && downsides.length > 0 && (
      <>
        <h3 className="mt-6 mb-3 text-xl font-semibold text-red-700">Downsides</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          {downsides.map((downside, index) => (
            <li key={index} className="text-gray-700">{downside}</li>
          ))}
        </ul>
      </>
    )}
    
    <h3 className="mt-6 mb-3 text-xl font-semibold">Pricing</h3>
    <p className="text-gray-700 font-medium">{pricing}</p>
  </div>
);

// Resource List component
interface Resource {
  title: string;
  image: string;
  description: string;
  link: string;
}

interface ResourceListProps {
  resources: Resource[];
}

export const ResourceList = ({ resources }: ResourceListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
      {resources.map((resource, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <img
            src={resource.image}
            alt={resource.title}
            className="w-full h-32 object-contain mb-4 rounded"
          />
          <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-600 transition-colors"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

// Export all MDX components
export const MDXComponents = {
  img: CustomImage,
  a: CustomLink,
  code: CustomCode,
  pre: CustomCode,
  blockquote: CustomBlockquote,
  TableOfContents,
  CompetitorSection,
  ResourceList,
};


