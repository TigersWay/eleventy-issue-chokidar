export default async function (eleventyConfig) {
  eleventyConfig.setServerOptions({ watch: ['_site/styles.css'] });
}
