# Personal Hub
My personal page made using Astro, Bulma and resume-json

## Installation
```bash
npm install
```

## Deploy
```bash
npm run build
```

## Development
```bash
npm run dev
```

## Config
### config.mjs
Copy `config.sample.mjs` to `config.mjs` and modify the values

### .env
Copy `.env.sample` to `.env` and modify however you like

### Resume
`/src/data/resume/*.json` contains all json required for building the resume.

- **common.json**: Data common for all variants
- **[LANG].json**: Specific variant

NOTE: Image and name are not needed, they are fetched from the .env file.

### Misc
Copy all the `/src/data/*.sample.json` files and modify them
