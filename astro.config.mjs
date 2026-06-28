// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
  site: 'https://community-fabs.github.io',
  integrations: [
    mermaid({
      autoTheme: true
    }),
    starlight({
      title: 'Community Fabs',
      pagination: false,
      logo: {
        src: './src/assets/logo.svg'
      },
      favicon: './src/assets/logo.svg',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/community-fabs'
        }
      ],
      plugins: [
        starlightAutoSidebar(),
        starlightSidebarTopics([
          {
            label: 'Overview',
            link: '/',
            icon: 'open-book',
            items: ['index'],
          },
          {
            label: 'Concepts',
            link: '/concepts/contributing',
            icon: 'open-book',
            items: [{ autogenerate: { directory: 'concepts' } }],
          },
          {
            label: 'SDKs',
            link: '/sdks',
            icon: 'information',
            items: [
              'sdks',
              {
                label: 'JavaScript',
                items: [{ autogenerate: { directory: 'sdks/js' } }],
                collapsed: true,
              },
              {
                label: '.NET',
                items: [{ autogenerate: { directory: 'sdks/dotnet' } }],
                collapsed: true,
              },
            ],
          },
        ]),
      ],
    })
  ],
});