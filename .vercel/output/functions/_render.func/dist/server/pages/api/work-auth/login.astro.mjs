import { n as normalizeWorkNextPath } from '../../../chunks/workAuth_D-VEulWh.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  String(form.get("password") || "");
  const nextPath = normalizeWorkNextPath(String(form.get("next") || "/work"));
  const makeErrorRedirect = (code) => {
    const loginUrl = new URL("/work-login", request.url);
    loginUrl.searchParams.set("next", nextPath);
    loginUrl.searchParams.set("error", code);
    return redirect(loginUrl.pathname + loginUrl.search, 302);
  };
  {
    return makeErrorRedirect("missing-password-config");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
