import { c as createComponent, h as renderHead, d as addAttribute, a as renderTemplate, i as renderSlot, j as renderScript, b as createAstro } from './astro/server_C-_fF5rL.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, currentPath } = Astro2.props;
  const isActive = (path) => currentPath === path;
  const navItems = [
    { href: "/", icon: "home", label: "Home" },
    { href: "/work", icon: "book_2", label: "Work" },
    { href: "/experiments", icon: "experiment", label: "Experiments" },
    { href: "/musings", icon: "cognition", label: "Musings" },
    { href: "/about", icon: "emoji_people", label: "About Me" }
  ];
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="theme-vintage"> <header class="site-header"> <a class="brand-wrap" href="/" aria-label="KRUXD Home"> <img class="brand-shield" src="/images/KRUXD-Shield-Motto.png" alt="KRUXD shield"> <span class="brand-lockup"> <span class="brand">KRUXD</span> <span class="brand-subtitle">UX &amp; Product Design</span> </span> </a> <nav class="primary-nav" aria-label="Primary"> <ul class="nav-links nav-inline"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(isActive(item.href) ? "active" : "", "class")}> <span class="material-symbols-outlined nav-icon" aria-hidden="true">${item.icon}</span> <span>${item.label}</span> </a> </li>`)} </ul> <div class="nav-menu"> <button id="nav-menu-trigger" class="nav-menu-trigger" type="button" aria-expanded="false" aria-haspopup="menu" aria-controls="nav-menu-panel" aria-label="Open navigation menu"> <span class="material-symbols-outlined nav-icon" aria-hidden="true">menu</span> <span>Menu</span> </button> <div id="nav-menu-panel" class="nav-menu-panel" hidden> <div class="nav-menu-head"> <span class="nav-menu-title">Menu</span> <div id="nav-menu-close" class="nav-menu-close" role="button" tabindex="0" aria-label="Close navigation menu"> <span class="material-symbols-outlined nav-icon" aria-hidden="true">close</span> </div> </div> <ul class="nav-menu-list" role="menu"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")}${addAttribute(isActive(item.href) ? "active" : "", "class")} role="menuitem"> <span class="material-symbols-outlined nav-icon" aria-hidden="true">${item.icon}</span> <span>${item.label}</span> </a> </li>`)} </ul> </div> </div> </nav> </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <div class="scroll-bg-mobile" aria-hidden="true"></div> <div class="panorama-bg" aria-hidden="true"></div> <div id="panorama-overlay" class="panorama-overlay" aria-hidden="true"></div> <div id="image-lightbox" class="image-lightbox" hidden aria-hidden="true"> <button id="image-lightbox-close" class="image-lightbox-close" type="button" aria-label="Close image preview"> <span class="material-symbols-outlined nav-icon" aria-hidden="true">close</span> </button> <figure class="image-lightbox-figure"> <img id="image-lightbox-img" class="image-lightbox-img" alt=""> <figcaption id="image-lightbox-caption" class="image-lightbox-caption"></figcaption> </figure> </div> ${renderScript($$result, "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
