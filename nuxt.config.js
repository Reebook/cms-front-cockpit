import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    target:  'static',
    modules: ['@nuxt/content'],
    css: ["~/assets/styles/bootstrap.scss"],
})