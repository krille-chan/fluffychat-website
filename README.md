# Build

Install TailwindCSS:

```sh
npm install tailwindcss @tailwindcss/cli
```

Build the CSS output:

```sh
npx tailwindcss -o ./src/assets/tailwind.css
```

Build the website with 11ty:

```sh
npx @11ty/eleventy
```

### Run locally

Build tailwindcss and serve eleventy:

```sh
npx @11ty/eleventy --serve
```