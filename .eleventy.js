module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });

  return {
    dir: {
      input: 'src/views',
      output: 'dist',
      includes: '_includes/partials',
      layouts: '_layouts',
    },
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
