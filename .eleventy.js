const htmlMin = require('html-minifier')

module.exports = eleventyConfig => {
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
        if(outputPath.endsWith('.html')){
            let minifiedHTML = htmlMin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
            return minifiedHTML
        }
        return content
    })
    eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css'
	})
    eleventyConfig.addPassthroughCopy('./src/assets/fonts/')
    eleventyConfig.addPassthroughCopy('./src/assets/ico/')
    eleventyConfig.addPassthroughCopy('./src/assets/img/')
    eleventyConfig.addPassthroughCopy('./src/assets/js/')
    eleventyConfig.addPassthroughCopy('./src/robots.txt')
    eleventyConfig.addPassthroughCopy('./src/assets/downloads/')

    eleventyConfig.addWatchTarget('./src/assets/')
    return{
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: '_site',
            data: '_data',
            layout: '_includes'
        },
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: "njk"
    }
}