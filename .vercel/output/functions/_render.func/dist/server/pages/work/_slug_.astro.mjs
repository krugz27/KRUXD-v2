import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_C-_fF5rL.mjs';
import 'piccolore';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_DOvJF3ra.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Djj4_Cyu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  const entries = await getCollection("work");
  const entry = entries.find((candidate) => candidate.slug === slug);
  if (!entry) {
    return Astro2.redirect("/work");
  }
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.title} | Work | KRUXD`, "currentPath": "/work" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="breadcrumbs" aria-label="Breadcrumb"> <a href="/">Home</a> <span class="crumb-sep" aria-hidden="true">/</span> <a href="/work">Work</a> <span class="crumb-sep" aria-hidden="true">/</span> <span aria-current="page">${entry.data.title}</span> </nav> <article class="section detail"> <p class="meta">${entry.data.industry} · ${entry.data.year} · ${entry.data.category}</p> <h1>${entry.data.title}</h1> <p class="lead">${entry.data.summary}</p> <div${addAttribute(`detail-body${entry.data.gallery && entry.data.gallery.length > 0 ? " has-gallery" : ""}`, "class")}> <div class="prose"> ${renderComponent($$result2, "Content", Content, {})} </div> ${entry.data.gallery && entry.data.gallery.length > 0 && renderTemplate`<aside class="detail-gallery" aria-label="Case study gallery"> <p class="detail-gallery-title">Gallery</p> <div class="detail-gallery-list"> ${entry.data.gallery.map((imageSrc, index) => renderTemplate`<button type="button" class="detail-gallery-thumb"${addAttribute(`Open gallery image ${index + 1} for ${entry.data.title}`, "aria-label")}> <img${addAttribute(imageSrc, "src")}${addAttribute(`${entry.data.title} gallery image ${index + 1}`, "alt")} loading="lazy"> </button>`)} </div> </aside>`} </div> </article> ` })}`;
}, "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
