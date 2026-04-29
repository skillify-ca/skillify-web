import createMDX from "@next/mdx";

const withMDX = createMDX({});

export default withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/games/tag/Build/:path*.br",
        headers: [
          { key: "Content-Encoding", value: "br" },
          { key: "Content-Type", value: "application/javascript" },
        ],
      },
    ];
  },
});
