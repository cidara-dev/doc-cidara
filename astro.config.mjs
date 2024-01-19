import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Multi Doc",
      social: {
        github: "https://github.com/cidara-dev/doc-cidara",
      },
      sidebar: [
        {
          label: "Intro",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Index", link: "/intro/linux-tutorial/" },
            { label: "Perintah Dasar", link: "/intro/basic/" },
            { label: "Web Server on Linux", link: "/intro/web-server/" },
            { label: "Web Server on Windows", link: "/intro/web-server-windows/" },
            { label: "SSH", link: "/intro/ssh/" },
          ],
        },
        {
          label: "Utility Penting",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "NPM dan Node", link: "/utility/npm/" },
            { label: "pm2", link: "/utility/pm2/" },
            { label: "NVM", link: "/utility/nvm/" },
            { label: "VS Code", link: "/utility/vsc/" },
            { label: "Git Dasar", link: "/utility/git/" },
          ],
        },
        {
          label: "HTML Dasar",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro", link: "/html/intro/" },
            { label: "Tag,Elemen,Atribut", link: "/html/pre/" },
            { label: "Paragraf", link: "/html/paragraf/" },
            { label: "Gambar (img)", link: "/html/img/" },
            { label: "Lengkap", link: "/html/lengkap/" },
          ],
        },
        {
          label: "Css Dasar",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro", link: "/css/intro/" },
            { label: "Sintaks Dasar", link: "/css/sintaks/" },
            { label: "Selektor", link: "/css/selektor/" },
            { label: "Warna dan Background", link: "/css/warna/" },
            { label: "Teks Formatting", link: "/css/teks/" },
            { label: "Selengkapnya", link: "/css/lengkap/" },
          ],
        },
        {
          label: "Bootstrap",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro", link: "/bootstrap/intro/" },
            { label: "Start", link: "/bootstrap/mulai/" },
            { label: "Grid", link: "/bootstrap/grid/" },
            { label: "Warna dan Background", link: "/bootstrap/warna/" },
            { label: "Teks Formatting", link: "/bootstrap/teks/" },
            { label: "Selengkapnya", link: "/bootstrap/lengkap/" },
          ],
        },
        {
          label: "Java Script",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro", link: "/java/intro/" },
            { label: "Variable dan Tipe Data", link: "/java/variable/" },
            { label: "Pencabangan", link: "/java/cabang/" },
            { label: "Perulangan", link: "/java/ulang/" },
            { label: "Struktur Data Array", link: "/java/data/" },
            { label: "Function", link: "/java/fungsi/" },
            { label: "Object", link: "/java/objek/" },
            { label: "DOM", link: "/java/dom/" },
            { label: "AJAX", link: "/java/ajax/" },
            { label: "Event", link: "/java/event/" },
          ],
        },

        {
          label: "Astro with Tailwind.css",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro", link: "astro/intro/" },
            { label: "Getting Started", link: "/astro/mulai/" },
            { label: "Tutorial", link: "/astro/project/" },
            { label: "Check in", link: "/astro/pages/" },
            { label: "Starlight", link: "/astro/starlight/" },
          ],
        },

        {
          label: "Tailwind.css",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro", link: "/tailwind/intro/" },
            { label: "Getting Started", link: "/tailwind/mulai/" },
            { label: "Template Tailwind", link: "/tailwind/template/" },
          ],
        },

        {
          label: "Flowbit JS",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro", link: "/flowbit/intro/" },
            { label: "Getting Started", link: "/flowbit/mulai/" },
          ],
        },

        {
          label: "Hestia CPanel",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Backup DB", link: "/server/backup/" },
            { label: "Setting Website", link: "/server/web/" },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
