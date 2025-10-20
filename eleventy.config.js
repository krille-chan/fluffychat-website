export default async function (eleventyConfig) {

    eleventyConfig.addFilter("t", (key, translations) => {
        if (!translations) return "";
        return key.split(".").reduce((o, k) => (o && o[k] !== undefined) ? o[k] : "", translations) || "";
    });

    eleventyConfig.addPassthroughCopy("src/assets");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
