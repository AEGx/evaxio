import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig:{
        //Public var env
    },
    privateRuntimeConfig: {
        //Private var env
    },
    typescript: {
        strict: true
      },
    css: [
        '@/assets/css/main.css'
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    }
})