import { W as WORK_AUTH_COOKIE, i as isValidWorkAuthToken, n as normalizeWorkNextPath } from './chunks/workAuth_DEzwTCD5.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CIerKPBV.mjs';
import 'piccolore';
import './chunks/astro/server_C-_fF5rL.mjs';
import 'clsx';
import { s as sequence } from './chunks/index_B4HBPLms.mjs';

const isProtectedWorkPath = (pathname) => pathname === "/work" || pathname.startsWith("/work/");
const onRequest$1 = async (context, next) => {
  const { url, cookies } = context;
  if (!isProtectedWorkPath(url.pathname)) {
    return next();
  }
  const token = cookies.get(WORK_AUTH_COOKIE)?.value;
  if (isValidWorkAuthToken(token)) {
    return next();
  }
  const nextPath = normalizeWorkNextPath(`${url.pathname}${url.search}`);
  return context.redirect(`/work-login?next=${encodeURIComponent(nextPath)}`);
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
