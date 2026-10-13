// my-portfolio/script.js
// Module 5 — DOM: Selecting & Modifying Elements
// Module 6 — Events & Interactive Components
// Module 7 — Data-Driven UI: Rendering Content from Data
//
// FACILITATOR LIVE-CODING COPY. Reference identity: Rishop Babu (matches
// shared/reference-portfolio and every other module's facilitator-demo).
//
// >>> markers are facilitator-only stage directions — never read them
// aloud. Type the Module 7 section live, in order, alongside the real
// projects.html / css/style.css in this same folder. Do not paste from
// here — retype it so the class watches it get built line by line.
// Modules 5–6 below are shown already-complete (as they were at the end
// of Module 6) — only Module 7's new section is staged for live-coding.
//
// Linked with `defer` from every page of the portfolio (index.html,
// about.html, projects.html, contact.html), so every feature below is
// written null-safe: not every page has every element this script touches,
// and a missing one should never throw an error for a visitor.
//
// Continuity note for facilitators: this is the exit state of Module 7.
// Modules 8–10 add to this same file incrementally — see each module's
// checkpoints/reference-solution for what it should contain by the end
// of that module.

console.log('script.js is running on the real site!');

// Feature 1: automatically insert the current year into the footer so the
// copyright line never needs to be hand-updated again. Every page has a
// #current-year span, but the null check is kept anyway as the safe habit.
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Feature 2: show a short, time-of-day-aware greeting under the main
// heading on the Home page. Only index.html has a #greeting element, so
// this null check is what keeps the script from throwing on every other page.
const greetingElement = document.querySelector('#greeting');
if (greetingElement) {
  const hour = new Date().getHours(); // 0–23
  let timeOfDay;

  if (hour < 12) {
    timeOfDay = 'morning';
  } else if (hour < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }

  greetingElement.textContent = `Good ${timeOfDay}! Thanks for visiting my portfolio.`;
}

// Exercise 3 "Flip a Class" test (Module 5) — muscle memory for classList
// only, never a real feature.
// const heading = document.querySelector('h1');
// if (heading) {
//   heading.classList.toggle('highlight');
// }

// Feature 3 (Exercise 5, Module 5): append a small "Last updated" note to
// the footer on every page, built entirely with JavaScript, using
// createElement + appendChild.
const footer = document.querySelector('.site-footer');
if (footer) {
  const lastUpdatedNote = document.createElement('p');
  lastUpdatedNote.classList.add('site-footer__note');
  const today = new Date();
  lastUpdatedNote.textContent = `Last updated: ${today.toLocaleDateString()}`;
  footer.appendChild(lastUpdatedNote);
}

// ============================================================
// MODULE 6 — Events & Interactive Components
// ============================================================

// Exercise 1 "Your First Listener" demo (Module 6) — addEventListener and
// the event object, explored live and then commented out (same pattern as
// Module 5 Exercise 3): the real, permanent features are below.
// const heading = document.querySelector('h1');
// if (heading) {
//   heading.addEventListener('click', function (event) {
//     console.log('You clicked:', event.target.textContent);
//     event.target.classList.toggle('highlight');
//   });
// }

// Exercise 2 "Input, Submit & Keyboard: A Quick Tour" demo (Module 6) —
// three more event types, explored live and then commented out. Real form
// handling (the `submit` event, `preventDefault()`, and validation) is
// Module 8's job — this is only a first look at how `input` and `keydown`
// fire.
// const contactNameInput = document.querySelector('#contact-name');
// if (contactNameInput) {
//   contactNameInput.addEventListener('input', function (event) {
//     console.log('Typing:', event.target.value);
//   });
// }
//
// document.addEventListener('keydown', function (event) {
//   if (event.key === 'Escape') {
//     console.log('Escape pressed — this is how a menu could later close on Escape.');
//   }
// });

// Feature 4 (Exercise 3): mobile navigation toggle. The button
// (.site-header__nav-toggle) and the <nav> it controls (#primary-nav)
// already exist in the header on every page (from Course 1) — today we
// make the button do something. JS decides WHEN the menu opens; the
// existing .site-header__nav--open CSS rule decides what "open" looks
// like. `aria-expanded` is kept in sync with the actual state so screen
// reader and keyboard users always know whether the menu is open.
const navToggleButton = document.querySelector('.site-header__nav-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (navToggleButton && primaryNav) {
  navToggleButton.addEventListener('click', function () {
    const isOpen = primaryNav.classList.toggle('site-header__nav--open');
    navToggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Feature 5 (Exercises 5–6): light/dark theme switcher. Every color in
// css/style.css is already a CSS custom property, redefined under
// :root[data-theme="dark"] (set up back in Course 1) — so toggling one
// attribute on <html> re-colors the whole page at once. This choice does
// NOT persist across a page reload yet; that is exactly what Module 8's
// localStorage lesson adds.
const themeToggleButton = document.querySelector('.site-header__theme-toggle');

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', function () {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }

    themeToggleButton.setAttribute('aria-pressed', String(!isDark));
    themeToggleButton.textContent = isDark ? '🌙' : '☀️';
    themeToggleButton.setAttribute(
      'aria-label',
      isDark ? 'Switch to dark theme' : 'Switch to light theme'
    );
  });
}

// ============================================================
// MODULE 7 — Data-Driven UI: Rendering Content from Data
// ============================================================
//
// `projects` (the const array) comes from projects-data.js — the exact
// Module 4 dataset, copied in unchanged — linked with `defer` immediately
// BEFORE this file, but ONLY from projects.html (see that page's <body>).
// On every other page `projects` doesn't exist at all, so this entire
// section is guarded behind the one element that only exists on
// projects.html (#project-list). That single guard is what keeps this
// script null-safe sitewide, exactly like every feature above it — without
// it, referencing `projects` on about.html/contact.html/index.html would
// throw a ReferenceError and stop the rest of this file from running.
// >>> PAUSE — "Who still has their projects-data.js from Module 4? Everyone
// should." Open js-practice/projects-data.js and my-portfolio/projects-data.js
// side by side — they are the exact same array, copied over unchanged.
// >>> PREDICT — "projects.html links projects-data.js, THEN script.js. Why
// does the order of these two <script> tags matter?" (projects-data.js
// declares the global `projects` array; script.js reads it — if the order
// were reversed, script.js would run before `projects` exists.)
const projectListContainer = document.querySelector('#project-list');

if (projectListContainer) {
  // Exercise 1: confirm the dataset actually arrived, and look at its shape,
  // before writing a single line of rendering code.
  console.log('Loaded projects dataset:', projects);
  console.log('Number of projects:', projects.length);
  console.log('First project:', projects[0]);

  // >>> RUN — reload projects.html, open the Console, point out the three
  // logs. >>> INSPECT — expand the logged array; count six objects, each
  // with the same six fields.
  // >>> BREAK (deliberate) — comment out the #project-list guard's `if`
  // for a moment and reload about.html: `projects is not defined` throws
  // in the Console. Put the guard back and explain why this single check
  // is what keeps the whole file null-safe sitewide, exactly like every
  // earlier feature.

  // Exercise 2: ONE reusable function that turns a single project object
  // into a card's HTML. It doesn't render anything by itself — it just
  // returns a string. Note on innerHTML: `projects` is our own trusted,
  // local data (from projects-data.js, written by us, in our own project)
  // — not text typed by a visitor — so building HTML with a template
  // literal and inserting it via innerHTML is safe and standard practice
  // here. (This is different from the Contact form's user-typed input in
  // Module 8, where innerHTML would NOT be an acceptable choice.)
  function createProjectCardHtml(project) {
    const featuredBadge = project.featured
      ? '<span class="project-card__badge">Featured</span>'
      : '';

    return `
      <article class="card project-card" data-project-id="${project.id}">
        ${featuredBadge}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="card__meta">Category: ${project.category} &middot; ${project.technologies.join(', ')}</p>
      </article>
    `;
  }

  // >>> PREDICT — "If I call createProjectCardHtml(projects[0]) and set
  // #project-list's innerHTML to the result, what happens?" >>> RUN it
  // live: exactly ONE card appears — the Portfolio Website project.
  // >>> PAUSE — "This function doesn't care WHICH project object we pass
  // it. What if, instead of one, we handed it every project and glued the
  // results together?" That's next.

  // Exercise 3: the reusable render function. It takes ANY array of
  // project objects and completely replaces whatever is currently inside
  // #project-list — it does not care whether that array is all 6 projects,
  // one project, or zero. Resetting the container with `=` (not `+=`)
  // every time is what makes repeated calls safe: each render REPLACES the
  // previous one instead of piling new cards on top of old ones.
  function renderProjects(projectList) {
    if (projectList.length === 0) {
      projectListContainer.innerHTML =
        '<p class="projects-empty">No projects match this search or filter yet. Try a different category or search term.</p>';
      return;
    }

    const cardsHtml = projectList
      .map(function (project) {
        return createProjectCardHtml(project);
      })
      .join('');

    projectListContainer.innerHTML = cardsHtml;
  }

  // >>> RUN — call renderProjects(projects) and reload: all six cards
  // appear, styled, with the Featured badge on two of them.
  // >>> BREAK (deliberate) — temporarily change the `=` on the innerHTML
  // line to `+=` and click a filter button twice once filters exist below;
  // point out the piling-up cards, then fix it back to `=` before moving on
  // — this is exactly one of today's debugging exercise's five faults.
  // >>> PAUSE — "renderProjects() takes an array — ANY array. What if we
  // handed it a smaller array containing only some of the projects?"

  // Exercise 4: category filter buttons, derived from the data itself
  // (rather than hard-coded), so a brand-new category added later to
  // projects-data.js gets its own filter button automatically, with no
  // change needed here.
  const filterBar = document.querySelector('#filter-buttons');
  let activeCategory = 'All';

  function renderCategoryFilters() {
    const uniqueCategories = projects.map(function (project) {
      return project.category;
    });
    // `new Set()` drops duplicate categories; the `...` spread unpacks it
    // back into a plain array we can map over like any other array.
    const categories = ['All', ...new Set(uniqueCategories)];

    filterBar.innerHTML = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-category="${category}">${category}</button>`;
      })
      .join('');
  }

  // >>> RUN — call renderCategoryFilters() and reload: buttons "All",
  // "Web", "Design" appear, generated from the data, not hard-coded.
  // >>> INSPECT — add a 7th project to projects-data.js with a brand-new
  // category live, reload, and point out a new button appeared with zero
  // code changes here — that's the payoff of deriving categories from data.
  // Remove the 7th project again afterward.

  // Exercise 5: search input + empty-state handling. Both the active
  // category AND the current search text are applied together every time
  // either one changes — this is what lets "Design" + "dashboard" narrow
  // down to exactly one card, and lets a search term that matches nothing
  // (in any category) genuinely produce zero results, which renderProjects
  // now handles gracefully instead of leaving a confusing blank grid.
  const searchInput = document.querySelector('#project-search');

  function applyFilters() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = projects.filter(function (project) {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });

    renderProjects(filtered);
  }

  if (filterBar) {
    renderCategoryFilters();

    // One click listener on the container (event delegation), not one per
    // button — this still works even though the buttons themselves are
    // generated dynamically and didn't exist when the page first loaded.
    filterBar.addEventListener('click', function (event) {
      if (event.target.matches('.filter-btn')) {
        activeCategory = event.target.dataset.category;

        filterBar.querySelectorAll('.filter-btn').forEach(function (button) {
          button.classList.toggle(
            'filter-btn--active',
            button.dataset.category === activeCategory
          );
        });

        applyFilters();
      }
    });

    // >>> RUN — click "Web", then "Design", then "All". >>> INSPECT —
    // point out that "All" needed its own branch in applyFilters(): no
    // project actually has category === "All", so without that special
    // case, clicking "All" would show ZERO projects — one of today's most
    // common bugs, worth breaking on purpose once.
    // >>> BREAK (deliberate) — temporarily delete the
    // `activeCategory === 'All' ||` part of matchesCategory and click
    // "All": the grid goes empty. Restore it and explain why.
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      applyFilters();
    });
  }

  // >>> RUN — type "dashboard" in the search box with "All" selected: one
  // card remains. >>> RUN — select "Web" and then type "dashboard": the
  // grid empties and the friendly message appears instead of a blank
  // container. >>> PAUSE — "Category AND search both apply together —
  // that's why this combination can genuinely find nothing, which is
  // exactly the case renderProjects()'s empty-state branch exists for."

  // Initial render: every project, no filter or search applied yet.
  applyFilters();
}
