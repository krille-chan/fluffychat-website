import anchor from "markdown-it-anchor";

export default async function (eleventyConfig) {

    eleventyConfig.amendLibrary("md", (md) => {
        md.use(anchor, {
            slugify: (s) => s.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "_"),
            permalink: anchor.permalink.linkInsideHeader({
                symbol: "🔗",
                placement: "after",
            }),
        });
    });

    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
