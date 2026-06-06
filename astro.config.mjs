// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
  site: 'https://community-fabs.github.io',
  integrations: [
    starlight({
      title: 'Community Fabs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/community-fabs'
        }
      ],
      plugins: [
        starlightSidebarTopics([
          {
            label: 'Overview',
            link: '/',
            icon: 'open-book',
            items: ['index'],
          },
          {
            label: 'Concepts',
            link: '/concepts/todo',
            icon: 'open-book',
            items: ['concepts/todo'],
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