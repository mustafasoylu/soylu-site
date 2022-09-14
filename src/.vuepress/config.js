const { description } = require('../../package');

module.exports = {
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Mustafa SOYLU',
      description: description,
    },
    '/tr/': {
      lang: 'tr-TR',
      title: 'Mustafa SOYLU',
      description: 'Mustafa Soylu/"nun portfolio and and blogu.',
    },
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/mustafasoylu',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    footer: {
      contact: [
        { type: 'github', link: 'https://github.com/mustafasoylu' },
        { type: 'facebook', link: 'https://www.facebook.com/Mohkargan/' },
        { type: 'twitter', link: 'https://twitter.com/soylumucchan' },
        { type: 'instagram', link: 'https://www.instagram.com/mohkargan/' },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/soylumu/?locale=en_US',
        },
        { type: 'mail', link: 'mailto:mohkargan@gmail.com' },
      ],
      copyright: [
        {
          text: 'MIT Licensed | Copyright © 2022 Mustafa Soylu',
        },
      ],
    },

    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'About Me',
            link: '/me/',
          },
          {
            text: 'Japan',
            link: '/japan/',
          },
          {
            text: 'Blog',
            link: '/blog/',
          },
        ],
        sidebar: 'auto',
      },
      '/tr/': {
        // text for the language dropdown
        selectText: 'Diller',
        // label for this locale in the language dropdown
        label: 'Türkçe',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Diller',
        // text for the edit-on-github link
        editLinkText: 'Bu sayfayı GitHub/"da düzenle',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'Yeni içerik hazır',
            buttonText: 'Yenile',
          },
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Anasayfa',
            link: '/tr/',
          },
          {
            text: 'Hakkımda',
            link: '/tr/me/',
          },
          {
            text: 'Japonya',
            link: '/tr/japan/',
          },
          {
            text: 'Blog',
            link: '/tr/blog/',
          },
        ],
        sidebar: {
          '/tr/japan/': ['', 'japonca', 'degisim'],
        },
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'social-share',
  ],
};
