module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });

  return {
    dir: {
      input: 'src/views',
      output: 'dist',
      includes: '_includes',
      data: '../_data',
    },
    templateFormats: ['njk', 'md'],
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
