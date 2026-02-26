import type { APIRoute } from 'astro';
import {
  createWorkAuthToken,
  getWorkPassword,
  getWorkAuthCookieOptions,
  normalizeWorkNextPath,
  WORK_AUTH_COOKIE
} from '../../../lib/workAuth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get('password') || '');
  const nextPath = normalizeWorkNextPath(String(form.get('next') || '/work'));
  const configuredPassword = getWorkPassword();
  const makeErrorRedirect = (code: string) => {
    const loginUrl = new URL('/work-login', request.url);
    loginUrl.searchParams.set('next', nextPath);
    loginUrl.searchParams.set('error', code);
    return redirect(loginUrl.pathname + loginUrl.search, 302);
  };

  if (!configuredPassword) {
    return makeErrorRedirect('missing-password-config');
  }

  if (password !== configuredPassword) {
    return makeErrorRedirect('incorrect');
  }

  const token = createWorkAuthToken();
  if (!token) {
    return makeErrorRedirect('missing-secret-config');
  }

  cookies.set(WORK_AUTH_COOKIE, token, getWorkAuthCookieOptions());

  return redirect(nextPath, 302);
};
