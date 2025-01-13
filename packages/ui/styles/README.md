# @spotify-social/styles

Shared theme and styling configuration for Spotify Social applications.

## Setup in your app

1. Install required packages:

```bash
pnpm add @spotify-social/styles -D tailwindcss postcss autoprefixer
```

2. Create PostCSS config:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

3. Create Tailwind config:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("@spotify-social/styles/tailwind.config.js")]
}
```

4. Create your CSS file:

```css
/* app/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Import styles in your app entry point:

```tsx
import '@spotify-social/styles/dist/index.css'
import './styles/globals.css'
```
