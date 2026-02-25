import { n as normalizeWorkNextPath, g as getWorkPassword, c as createWorkAuthToken, W as WORK_AUTH_COOKIE } from '../../../chunks/workAuth_h_DhOBKC.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get("password") || "");
  const nextPath = normalizeWorkNextPath(String(form.get("next") || "/work"));
  const configuredPassword = getWorkPassword();
  const makeErrorRedirect = (code) => {
    const loginUrl = new URL("/work-login", request.url);
    loginUrl.searchParams.set("next", nextPath);
    loginUrl.searchParams.set("error", code);
    return redirect(loginUrl.pathname + loginUrl.search, 302);
  };
  if (!configuredPassword) {
    return makeErrorRedirect("missing-password-config");
  }
  if (password !== configuredPassword) {
    return makeErrorRedirect("incorrect");
  }
  const token = createWorkAuthToken();
  if (!token) {
    return makeErrorRedirect("missing-secret-config");
  }
  cookies.set(WORK_AUTH_COOKIE, token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 8
  });
  return redirect(nextPath, 302);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
