import { n as normalizeWorkNextPath } from '../../../chunks/workAuth_DEzwTCD5.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  normalizeWorkNextPath(
    String((await request.formData()).get("next") || "/work")
  );
  {
    return redirect("/work-login?error=incorrect", 302);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
