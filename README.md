# Astro + React + Tailwind

## 🔍 Overview

Here you will find a template to create an `Astro` project that uses `React` and `Tailwind`. Also it has `eslint` and `prettier` configured.

Run the following command to create a project with the template:

```sh
pnpm create astro@latest <project-name> -- --template evertzner/astro-react-tailwind-template --yes
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .husky/
│   └── _pre-commit
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Main.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   │   └── index.astro
│   └── styles.css
└── .gitignore
└── .prettierrc
└── .prettierrc.mjs
└── astro.config.mjs
└── eslint.config.js
└── package.json
└── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |
| `pnpm run format`  | Format the document using Prettier           |
| `pnpm run check`   | Check types using `astro check`              |
| `pnpm run lint`    | Check linting and format                     |

## Husky

To initiate husky run the following command.

```sh
npx husky init
```

Replace `pre-commit` file content with content from `_pre-commit`
