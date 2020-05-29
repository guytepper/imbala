module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/css/fonts': 'css/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });

  config.addCollection('events', function (collection) {
    let allEvents = collection.getFilteredByGlob('src/site/_data/events/*.md');
    let futureEvents = allEvents.filter((event) => {
      return new Date(event.data.date) >= new Date();
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
