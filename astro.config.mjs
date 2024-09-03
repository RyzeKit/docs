import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RyzeKit Docs",
      social: {
        github: "https://github.com/RyzeKit/docs",
      },
      sidebar: [
        { label: "Getting Started", slug: "getting-started" },
        { label: "Authentication", slug: "authentication" },
        {
          label: "Payments",
          items: [
            { label: "Introduction", slug: "payments/introduction" },
            { label: "Stripe", slug: "payments/stripe" },
            { label: "Lemonsqueezy", slug: "payments/lemonsqueezy" },
          ],
        },
        { label: "Email", slug: "email" },
        { label: "Deployment", slug: "deployment" },
        { label: "Analytics", slug: "analytics" },
      ],
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: ["./src/styles/globals.css"],
      editLink: { baseUrl: "https://github.com/RyzeKit/docs/edit/main" },
    }),
  ],
});
