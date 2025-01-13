# @spotify-social/components

A React component library for Spotify Social application.

## Installation

```bash
pnpm add @spotify-social/components
```

## Prerequisites

This library requires you to have @spotify-social/styles set up in your application. Follow the setup instructions in the [@spotify-social/styles README](../styles/README.md).

## Usage

Import components directly from the package:

```tsx
import { Button } from '@spotify-social/components'

function App() {
 return (
   <Button variant="default">
     Click me
   </Button>
 )
}
```

## Development

View components and documentation in Storybook:

```bash
pnpm storybook
```