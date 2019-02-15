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
  
  // do convert string to unicode entities, for email obfuscation
  eleventyConfig.addFilter("enunicode", function(value) {
    let newStr = "";
		// get string (convert to lowercase)
		let s = value.toLowerCase();
  	// find length of string
		let strLen = s.length;
		let i = 0;
    // loop through characters from last to first
    for (i = strLen - 1; i > -1; i--) {
      // build new string
      newStr = "&#" + s.charCodeAt(i) + ";" + newStr;
    }
    return newStr;
  });
  
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
