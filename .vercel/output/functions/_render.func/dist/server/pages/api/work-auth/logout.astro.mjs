import { W as WORK_AUTH_COOKIE } from '../../../chunks/workAuth_DEzwTCD5.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ cookies, redirect }) => {
  cookies.delete(WORK_AUTH_COOKIE, { path: "/" });
  return redirect("/work-login", 302);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
