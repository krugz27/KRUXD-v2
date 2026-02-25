import type { MiddlewareHandler } from 'astro';
import { isValidWorkAuthToken, normalizeWorkNextPath, WORK_AUTH_COOKIE } from './lib/workAuth';

const isProtectedWorkPath = (pathname: string) =>
  pathname === '/work' || pathname.startsWith('/work/');

export const onRequest: MiddlewareHandler = async (context, next) => {
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
