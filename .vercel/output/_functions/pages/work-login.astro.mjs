import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-_fF5rL.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Djj4_Cyu.mjs';
import { n as normalizeWorkNextPath } from '../chunks/workAuth_h_DhOBKC.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$WorkLogin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkLogin;
  const nextPath = normalizeWorkNextPath(Astro2.url.searchParams.get("next"));
  const errorParam = Astro2.url.searchParams.get("error");
  const hasIncorrectPasswordError = errorParam === "incorrect";
  const hasMissingPasswordConfigError = errorParam === "missing-password-config";
  const hasMissingSecretConfigError = errorParam === "missing-secret-config";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work Access | KRUXD", "currentPath": "/work", "data-astro-cid-g3ncwfns": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="breadcrumbs" aria-label="Breadcrumb" data-astro-cid-g3ncwfns> <a href="/" data-astro-cid-g3ncwfns>Home</a> <span class="crumb-sep" aria-hidden="true" data-astro-cid-g3ncwfns>/</span> <span aria-current="page" data-astro-cid-g3ncwfns>Work Access</span> </nav> <section class="hero compact" data-astro-cid-g3ncwfns> <p class="eyebrow" data-astro-cid-g3ncwfns>Portfolio Access</p> <h1 data-astro-cid-g3ncwfns>Enter Access Password</h1> <p data-astro-cid-g3ncwfns>Some project details are shared privately. Enter the password to view full case studies.</p> </section> <section class="section detail" data-astro-cid-g3ncwfns> <form class="work-login-form" method="post" action="/api/work-auth/login" data-astro-cid-g3ncwfns> <input type="hidden" name="next"${addAttribute(nextPath, "value")} data-astro-cid-g3ncwfns> <label class="work-login-label" for="work-password" data-astro-cid-g3ncwfns>Access password</label> <input id="work-password" class="work-login-input" type="password" name="password" autocomplete="current-password" required data-astro-cid-g3ncwfns> ${hasIncorrectPasswordError && renderTemplate`<p class="work-login-error" role="alert" data-astro-cid-g3ncwfns>
That password didn&apos;t work. Please try again.
</p>`} ${hasMissingPasswordConfigError && renderTemplate`<p class="work-login-error" role="alert" data-astro-cid-g3ncwfns>
Password protection is not configured yet. Set \`WORK_SECTION_PASSWORD\` and restart \`npm run dev\`.
</p>`} ${hasMissingSecretConfigError && renderTemplate`<p class="work-login-error" role="alert" data-astro-cid-g3ncwfns>
Password secret is not configured. Set \`WORK_SECTION_SECRET\` (or rely on \`WORK_SECTION_PASSWORD\`) and restart \`npm run dev\`.
</p>`} <div class="work-login-actions" data-astro-cid-g3ncwfns> <button type="submit" class="work-login-submit" data-astro-cid-g3ncwfns>View Case Studies</button> <a href="/" class="work-login-cancel" data-astro-cid-g3ncwfns>Return to Home</a> </div> </form> </section> ` })} `;
}, "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work-login.astro", void 0);

const $$file = "/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work-login.astro";
const $$url = "/work-login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WorkLogin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
