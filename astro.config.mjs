import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'G5betmBKDXrQGTwgwpu4ygtt',
      components: {
        page: 'storyblok/Page',
        article: 'storyblok/Article',
        article_overview: 'storyblok/ArticleOverview',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        nav_item: 'storyblok/NavItem',
        vue_counter: 'storyblok/VueCounter',
      },
    }),
    tailwind(),
    vue(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
