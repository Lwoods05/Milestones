# LWS Creations: Milestones Portfolio

LWS Creations is a responsive, three-page portfolio website created by **Lemar Woods**. It presents a growing body of creative work centered on art, storytelling, coloring books, comic ideas, community, and technology.

**Live site:** [lwoods05.github.io/Milestones](https://lwoods05.github.io/Milestones/)

## Website Overview

The site gives visitors an introduction to Lemar's creative journey, highlights current and planned projects, and provides places for visitors to share what interests them. Its navy, gold, and white visual system is paired with friendly display and body typefaces to make the portfolio feel personal while remaining easy to scan.

## Pages

| Page | Purpose | Highlights |
| --- | --- | --- |
| [Home](index.html) | Introduces LWS Creations and directs visitors to the rest of the portfolio. | Welcome hero, coloring-book cover image, links to Projects and About, and a quick-message form. |
| [Projects](projects.html) | Shares creative work and ideas in progress. | Lemar's Life Story coloring-book concept, future comic-book idea, animation and graphic-design goals, and sources of inspiration. |
| [About](about.html) | Tells Lemar's story and creative goals. | Creator biography, skills and resume details, quick facts, interests, goals, and a stay-connected form. |

## Design Principles

- **Proximity:** Related content is grouped inside each card and section, so visitors can quickly understand which heading, description, and action belong together.
- **Similarity:** Shared card borders, spacing, button styles, and the consistent navy-and-gold palette make repeated content types feel connected across all three pages.

## Features

- Responsive layouts built with CSS Grid and Flexbox for phone, tablet, and desktop screens.
- A reusable design system using CSS custom properties for navy, gold, white, shadows, text, and form colors.
- Light/dark mode toggle with the preference saved in `localStorage` so it persists between visits.
- Shared navigation with a collapsible mobile menu, a clear current-page indicator, and a sticky header.
- A "Toggle highlight" button on every page that lets readers turn a featured card's highlight on or off, with the choice remembered across pages.
- Expandable "Read more" sections on the Home, Projects, and About pages for extra detail without cluttering the page.
- A featured image for the *Lemar's Life Story* coloring-book project.
- A Skills & Resume section with core skills, IT education and coursework, and work experience.
- Contact-style forms on the Home and About pages with inline validation, error messages, and a confirmation state on submit.
- A GitHub stats lookup and a mood-word color preview on the Home page.
- A "Back to top" button that appears after scrolling.
- Google Fonts: [Pacifico](https://fonts.google.com/specimen/Pacifico) for branding and [Quicksand](https://fonts.google.com/specimen/Quicksand) for readable body copy.
- Focus, hover, and reduced-motion styles that make interaction clearer and more comfortable.

## Accessibility

Accessibility is built into the page structure and shared stylesheet.

- Semantic HTML landmarks: `header`, `nav`, `main`, `section`, `article`, and `footer`.
- A skip link lets keyboard users move directly to the main page heading.
- Logical heading order from `h1` through `h3`.
- Descriptive `alt` text for the featured project image.
- Accessible navigation labels and `aria-current` state for the active page.
- Form labels, required fields, helpful error-message regions, and appropriate autocomplete/input settings.
- Keyboard-visible focus indicators and colors selected for WCAG AA contrast.
- A `prefers-reduced-motion` media query that limits animations and transitions for visitors who request it.

Accessibility fixes documented here include semantic landmarks, one logical `h1` per page with ordered `h2` and `h3` headings, a skip link and visible focus states, descriptive image text, labeled form controls, inline validation messages, keyboard-operable buttons, and contrast-safe text and background colors.

The site has been checked with [WAVE](https://wave.webaim.org/) and achieved 0 errors, 0 contrast errors, and an AIM score of 10/10.

## Technology

This is a lightweight static website. It uses:

- HTML5
- CSS3
- Vanilla JavaScript (`assets/js/site.js` for shared site behavior, `assets/js/interactive.js` for Home page extras)
- Google Fonts
- GitHub Pages for deployment

There is no build process, framework, or server-side code required to view the site.

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Lwoods05/Milestones.git
   ```

2. Open the `Milestones` folder in VS Code.
3. Open `index.html` in a web browser, or use the Live Server extension for automatic browser refreshes while editing.

## Project Structure

```text
Milestones/
|-- index.html                         # Home page
|-- projects.html                      # Projects page
|-- about.html                         # About and contact page
|-- README.md                          # Project documentation
`-- assets/
    |-- css/
    |   `-- style.css                   # Shared layout, responsive, and accessibility styles
    |-- data/
    |   `-- idea-prompts.json           # Supporting content data
    |-- images/
    |   |-- Lemars_Life_Story_Cover_Page.png  # Coloring-book cover image
    |   `-- black_super_heroes.jpg      # Comic-inspiration image
    `-- js/
        |-- site.js                     # Shared behavior: theme toggle, nav, forms, highlight toggle, back-to-top
        `-- interactive.js               # Home page extras: GitHub stats lookup and mood-word preview
```

## Deployment

The project is published through GitHub Pages from the repository's `main` branch. Changes pushed to GitHub are available at [lwoods05.github.io/Milestones](https://lwoods05.github.io/Milestones/) after GitHub Pages finishes deploying them.

## Author

Created by **Lemar Woods** in 2026.
