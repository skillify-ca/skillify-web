import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const ContentfulContent = ({ data }) => {
  return (
    <div className="flex flex-col space-y-4 bg-white items-center p-8 w-full md:w-3/4">
      {documentToReactComponents(data, {
        renderNode: {
          [BLOCKS.HEADING_1]: (node, children) => {
            return <h1 className="text-4xl">{children}</h1>;
          },
          [BLOCKS.HEADING_2]: (node, children) => {
            return <h2 className="text-2xl">{children}</h2>;
          },
          [BLOCKS.PARAGRAPH]: (node, children) => {
            console.log(node);

            return <p className="w-full ">{children}</p>;
          },
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            const imageUrl = node.data.target.fields.file.url;
            return <img src={imageUrl} />;
          },
          [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            const componentType = node.data.target.sys.contentType.sys.id;
            if (componentType === "component_video") {
              const videoData = node.data.target.fields;
              return (
                <div className="w-full sm:w-96">
                  <p className="font-bold">{videoData.title}</p>
                  <iframe
                    className="w-full"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoData.youtubeVideoId}`}
                    title="YouTube video player"
                    frameBorder={"0"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            } else {
              return <p>{JSON.stringify(node)}</p>;
            }
          },
        },
        renderMark: {
          [MARKS.CODE]: (text) => <code className="red">{text}</code>,
        },
        renderText: (text) => {
          return text
            .split("\n")
            .map((i) => [i, <br />])
            .flat();
        },
      })}
    </div>
  );
};

export default ContentfulContent;
