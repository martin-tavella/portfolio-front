/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  siteUrl: 'https://www.martintavella.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/404'],
};