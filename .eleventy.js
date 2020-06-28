module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/css/fonts': 'css/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'src/admin': 'admin' });

  eleventyConfig.addCollection('events', function (collection) {
    let allEvents = collection.getFilteredByGlob('**/*.md');
    let futureEvents = allEvents.filter((event) => {
      return new Date(event.data.date) >= new Date();
    });
    console.log(allEvents[0].data.title_en);
    return allEvents;
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
