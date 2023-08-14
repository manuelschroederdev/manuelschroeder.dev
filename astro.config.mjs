import { defineConfig } from 'astro/config'
import * as dotenv from 'dotenv'
dotenv.config()
import vue from '@astrojs/vue'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import basicSsl from '@vitejs/plugin-basic-ssl'
import netlify from '@astrojs/netlify/functions'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://manuelschroeder.dev',
  integrations: [
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      bridge: process.env.SITE_NAME === 'manuelschroeder' ? false : true,
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
    sitemap({
      filter: (page) => page !== 'https://manuelschroeder.dev/site-config/',
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          disallow: process.env.SITE_NAME === 'manuelschroeder' ? '' : '/',
        },
      ],
    }),
  ],
  output: process.env.SITE_NAME === 'manuelschroeder' ? 'hybrid' : 'server',
  adapter: netlify(),
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
