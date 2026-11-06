# Henon Hailu — Portfolio

Personal portfolio built with React, Tailwind CSS v4, and Framer Motion. Live at https://henonh.github.io.

## Develop

```bash
npm install
npm run dev
```

## Editing content

- About, experience, projects, and contact info: `src/data/content.js`
- Project order: `featuredProjects` / `otherProjects` at the bottom of `content.js`
- Project images: `public/projects/<project>/<n>.webp` (index `0` is the card cover)
- Profile photo: add `public/me.jpg` (portrait, ~4:5)
- Resume: replace `public/resume.pdf`

Pushing to `main` deploys automatically via GitHub Actions.
