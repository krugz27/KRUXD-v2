import type { APIRoute } from 'astro';
import {
  getWorkAuthCookieOptions,
  normalizeWorkNextPath,
  WORK_AUTH_COOKIE,
  WORK_AUTH_DEV_BYPASS_TOKEN
} from '../../../lib/workAuth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const nextPath = normalizeWorkNextPath(
    String((await request.formData()).get('next') || '/work')
  );

  if (!import.meta.env.DEV) {
    return redirect('/work-login?error=incorrect', 302);
  }

  cookies.set(WORK_AUTH_COOKIE, WORK_AUTH_DEV_BYPASS_TOKEN, getWorkAuthCookieOptions());
  return redirect(nextPath, 302);
};
