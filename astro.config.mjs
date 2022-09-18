import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { loadEnv } from 'vite'
process.env = { ...process.env, ...loadEnv('development', process.cwd()) }

export default defineConfig({
  site: 'https://manuelschroeder.dev',
  integrations: [
    storyblok({
      accessToken: 'G5betmBKDXrQGTwgwpu4ygtt',
      components: {
        page: 'storyblok/Page',
        article: 'storyblok/Article',
        article_overview: 'storyblok/ArticleOverview',
        latest_articles: 'storyblok/LatestArticles',
        hero: 'storyblok/Hero',
        grid: 'storyblok/Grid',
        grid_card: 'storyblok/GridCard',
        text_section: 'storyblok/TextSection',
        image_text_section: 'storyblok/ImageTextSection',
        nav_item: 'storyblok/NavItem',
        button: 'storyblok/Button',
        contact_form: 'storyblok/ContactForm',
      },
    }),
    tailwind(),
    vue(),
    image(),
    sitemap({
      filter: (page) => page !== 'https://manuelschroeder.dev/site-config/',
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
