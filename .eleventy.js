module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/css/fonts': 'css/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'src/admin': 'admin' });

  eleventyConfig.addCollection('events', function (collection) {
    let allEvents = collection.getFilteredByGlob('**/*.md');
    let futureEvents = allEvents.filter((event) => {
      // Show events until 24 hours afterwards
      return new Date(event.data.date) >= new Date(Date.now() - 1000 * 60 * 60 * 24);
    });
    return futureEvents;
  });

  return {
    dir: {
      input: 'src/site',
      output: 'dist',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'md'],
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
