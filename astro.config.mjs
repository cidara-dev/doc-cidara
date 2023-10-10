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
						{ label: 'NPM dan Node', link: '/utility/npm/' },
						{ label: 'pm2', link: '/utility/pm2/' },
						{ label: 'NVM', link: '/utility/nvm/' },
						{ label: 'VS Code', link: '/utility/vsc/' },
						{ label: 'Git', link: '/utility/git/' },

					],

				},
				{					
					label: 'HTML Dasar',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/html/intro/' },
						{ label: 'Tag,Elemen,Atribut', link: '/html/pre/' },
						{ label: 'Paragraf', link: '/html/paragraf/' },
						{ label: 'Gambar (img)', link: '/html/img/' },
						{ label: 'Lengkap', link: '/html/lengkap/' },
					],

				},
				{					
					label: 'Css Dasar',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/css/intro/' },
						{ label: 'Sintaks Dasar', link: '/css/sintaks/' },
						{ label: 'Selektor', link: '/css/selektor/' },
						{ label: 'Warna dan Background', link: '/css/warna/' },
						{ label: 'Teks Formatting', link: '/css/teks/' },
						{ label: 'Selengkapnya', link: '/css/lengkap/' },
					],

				},
				{					
					label: 'Java Script',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/java/intro/' },
						{ label: 'Variable', link: '/java/variable/' },
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
