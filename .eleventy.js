const pluginSass = require("eleventy-plugin-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const format = require('date-fns/format');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginSass, {
        watch: "src/sass/*.scss",
        outputDir: "build/css",
    });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addFilter('date', function (date, dateFormat) {
        return format(date, dateFormat)
    });

    eleventyConfig.addPassthroughCopy({
        "node_modules/@fortawesome/fontawesome-free/webfonts": "webfonts",
        "src/img": "img",
    });

    return {
        dir: {
            input: "src",
            output: "build"
        },
    };
};
