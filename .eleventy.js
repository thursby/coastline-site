const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.addPassthroughCopy("./src/_redirects");
  

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
  });
  
  // You can return your Config object (optional).
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats: ["md","liquid","njk","html","jpg","png","css","js","woff","htaccess","txt","webmanifest","ico","xml"],
    pathPrefix: '/'
  };
};
