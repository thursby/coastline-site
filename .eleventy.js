module.exports = function(eleventyConfig) {
  // Define files to pass through without modification
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/humans.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("src/404.html");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  
  // Custom config settings
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats: ["md","liquid","njk"],
    pathPrefix: '/'
  };
};
