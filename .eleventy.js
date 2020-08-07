module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/css/fonts': 'css/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
  eleventyConfig.addPassthroughCopy({ 'src/admin': 'admin' });

  eleventyConfig.addCollection('events', function (collection) {
    const allEvents = collection.getFilteredByGlob('**/*.md');
    const futureEvents = allEvents.filter((event) => {
      // Show events until 24 hours afterwards
      return new Date(event.data.date) >= new Date(Date.now() - 1000 * 60 * 60 * 24);
    });

    const pastEvents = allEvents
      .filter((event) => {
        return new Date(event.data.date) <= new Date(Date.now() - 1000 * 60 * 60 * 24);
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return { futureEvents, pastEvents };
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
