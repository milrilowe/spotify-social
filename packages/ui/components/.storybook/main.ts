import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': path.resolve(__dirname, '../src'),
      }
    }
    config.css = {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer')
        ]
      },
    }
    return config
  }
};

export default config;