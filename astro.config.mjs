import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RyzeKit Docs",
      social: {
        github: "https://github.com/RyzeKit/docs",
      },
      sidebar: [
        {
          label: "Astro Starter",
          items: [
            { label: "Getting Started", slug: "astro/getting-started" },
            { label: "Authentication", slug: "astro/authentication" },
            {
              label: "Payments",
              items: [
                { label: "Introduction", slug: "astro/payments/introduction" },
                { label: "Stripe", slug: "astro/payments/stripe" },
                { label: "Lemonsqueezy", slug: "astro/payments/lemonsqueezy" },
              ],
            },
            { label: "Email", slug: "astro/email" },
            { label: "Deployment", slug: "astro/deployment" },
            { label: "Analytics", slug: "astro/analytics" },
            { label: "Blog", slug: "astro/blog" },
            { label: "Docs (Help Center)", slug: "astro/docs" },
            { label: "Internationalization (i18n)", slug: "astro/i18n" },
          ],
        },
      ],
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: ["./src/styles/tailwind.css"],
      editLink: { baseUrl: "https://github.com/RyzeKit/docs/edit/main" },
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
