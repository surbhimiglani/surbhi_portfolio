# Surbhi Miglani Portfolio

A static React portfolio focused on backend engineering, distributed systems, cloud infrastructure, data engineering, websites, and mobile products.

## Tech Stack

- React
- Node.js
- esbuild
- Nodemon
- HTML and CSS

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site runs at [http://localhost:4173](http://localhost:4173). Nodemon rebuilds and restarts the server when source files or assets change.

## Build

Create the static production output:

```bash
npm run build
```

The deployable site is generated in `dist/`. Preview it locally with:

```bash
npm run preview
```

## GitHub Pages

Repository: [surbhimiglani/surbhi_portfolio](https://github.com/surbhimiglani/surbhi_portfolio)

Expected Pages URL: `https://surbhimiglani.github.io/surbhi_portfolio/`

To deploy, run `npm run build` and publish the contents of `dist/` through GitHub Pages, GitHub Actions, or a Pages branch. The build uses relative asset paths so the site works under the repository subpath.

## Project Structure

```text
src/       React application and styles
public/    Photo, resume, favicon, and static assets
scripts/   Node build and static server scripts
dist/      Generated production site
```

## Content and Assets

- Portfolio content: `src/main.jsx`
- Main styles: `src/style.css`
- Resume-specific styles: `src/resume.css`
- Profile photo: `public/surbhi_pic.jpeg`
- Resume download: `public/Surbhi-Miglani-Resume.pdf`
