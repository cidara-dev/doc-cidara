import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Multi Doc',
			social: {
				github: 'https://github.com/cidara-dev/doc-cidara',
			},
			sidebar: [
				{					
					label: 'Intro',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Index', link: '/intro/linux-tutorial/' },
						{ label: 'Perintah Dasar', link: '/intro/remote/' },
						{ label: 'Web Server Lokal', link: '/intro/first/' },
						{ label: 'SSH', link: '/intro/ssh/' },

					],
				},
				{					
					label: 'Utility Penting',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'NPM', link: '/next/npm/' },
						{ label: 'NVM', link: '/next/nvm/' },
						{ label: 'VS Code', link: '/next/vsc/' },
						{ label: 'Git', link: '/next/git/' },

					],

				},
				{					
					label: 'HTML Dasar',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/html/intro/' },
						{ label: 'Tag,Elemen,Atribut', link: '/html/pre/' },
						{ label: 'Paragraf', link: '/html/paragraf/' },
					],

				},
				{					
					label: 'Css Dasar',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/css/intro/' },
						{ label: 'Pre Requist', link: '/css/pre/' },
					],

				},
				{					
					label: 'Bootstrap',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bootstrap', link: '/web/bootstrap/' },
						{ label: 'Pre Requist', link: '/web/intro/' },
					],

				},

				{					
					label: 'Astro with Tailwind.css',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: 'astro/intro/' },
						{ label: 'Getting Started', link: '/astro/mulai/' },
						{ label: 'Tutorial', link: '/astro/project/' },
						{ label: 'Check in', link: '/astro/pages/' },
					],

				},
				{					
					label: 'Referensi',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Astro', link: 'reference/astro/' },
					],

				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
