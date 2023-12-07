// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'myWitWallet Support',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'title',
          name: 'title',
          content: 'myWitWallet Support',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            process.env.npm_package_description ||
            'myWitWallet support and contact info',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'myWitWallet Support',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'myWitWallet support and contact info',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/logo.png',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'myWitWallet Support',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'myWitWallet Support',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'myWitWallet support and contact info',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/logo.png',
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: '/logo.png',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'myWitWallet Support',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  components: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/main.scss";',
        },
      },
    },
  },
})
