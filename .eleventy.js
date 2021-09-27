module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addFilter("randomRange", function (value, min, max) {
        return value + (Math.random() * (max - min) + min);
    });
}