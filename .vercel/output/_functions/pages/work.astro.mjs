import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-_fF5rL.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_1CU53WGD.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_nUyAjae2.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const workEntries = (await getCollection("work")).sort((a, b) => b.data.year - a.data.year);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work | KRUXD", "currentPath": "/work" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="breadcrumbs" aria-label="Breadcrumb"> <a href="/">Home</a> <span class="crumb-sep" aria-hidden="true">/</span> <span aria-current="page">Work</span> </nav> <section class="hero compact"> <p class="eyebrow">Selected Work</p> <h1>Work</h1> <p>Deep dives into the product challenges I’ve solved through UX strategy and execution.</p> </section> <section class="section"> <div class="card-grid"> ${workEntries.map((entry) => renderTemplate`<article class="card"> <a class="thumb-link"${addAttribute(`/work/${entry.slug}`, "href")}${addAttribute(`Open ${entry.data.title}`, "aria-label")}> <img class="thumb"${addAttribute(entry.data.thumbnail ?? "/images/placeholder-thumb.svg", "src")}${addAttribute(`${entry.data.title} thumbnail`, "alt")} loading="lazy" decoding="async"> </a> <p class="meta">${entry.data.industry} · ${entry.data.year}</p> <h3> <a class="card-link"${addAttribute(`/work/${entry.slug}`, "href")}> ${entry.data.title} </a> </h3> <p>${entry.data.summary}</p> </article>`)} </div> </section> ` })}`;
}, "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work.astro", void 0);

const $$file = "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
