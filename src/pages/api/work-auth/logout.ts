import type { APIRoute } from 'astro';
import { WORK_AUTH_COOKIE } from '../../../lib/workAuth';

export const prerender = false;

export const POST: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete(WORK_AUTH_COOKIE, { path: '/' });
  return redirect('/work-login', 302);
};

