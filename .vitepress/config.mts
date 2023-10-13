import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CAP - Bringing it all together",
  description: "How to start with the SAP Cloud Application Programming Model",
  outDir: './.vitepress/public',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Learning CAP',
        items: [
          { text: 'Getting Started', link: '/start-here' },
          { text: 'Going Deeper', link: '/going-deeper' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/squarecloudlabs/cap.ui5.io' }
    ]
  }
})
