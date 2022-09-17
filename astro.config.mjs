import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import basicSsl from '@vitejs/plugin-basic-ssl'

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
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        grid_card: 'storyblok/GridCard',
        image_text_section: 'storyblok/ImageTextSection',
        teaser: 'storyblok/Teaser',
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
