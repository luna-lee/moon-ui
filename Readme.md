# Moon UI

A modern UI component library built with Vue 3, TypeScript, and Vite.

## Features

- 🚀 Based on Vue 3, TypeScript and Vite
- 📦 Tree-shakable ESM build
- 🎨 Customizable themes
- 📄 Detailed documentation
- 🧪 Thoroughly tested components

## Installation

```bash
# Using npm
npm install moon-ui

# Using yarn
yarn add moon-ui

# Using pnpm
pnpm add moon-ui
```

## Usage

### Full Import

```js
import { createApp } from 'vue'
import MoonUI from 'moon-ui'
import 'moon-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(MoonUI)
app.mount('#app')
```

### On-demand Import

```js
import { createApp } from 'vue'
import { Button, Input } from 'moon-ui'
import 'moon-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.mount('#app')
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build component library
pnpm build

# Run tests
pnpm test
```

## Project Structure

- `packages/components` - UI components source code
- `packages/docs` - Documentation site
- `examples` - Example usage projects

## License

MIT