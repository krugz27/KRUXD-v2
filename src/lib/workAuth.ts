import { createHmac, timingSafeEqual } from 'node:crypto';
import { Buffer } from 'node:buffer';
import process from 'node:process';

export const WORK_AUTH_COOKIE = 'kruxd_work_auth';
export const WORK_AUTH_DEV_BYPASS_TOKEN = 'dev-bypass';

const TOKEN_PREFIX = 'v1';
const TOKEN_PAYLOAD = 'work-access';

const readEnv = (key: 'WORK_SECTION_SECRET' | 'WORK_SECTION_PASSWORD') =>
  import.meta.env[key] || process.env[key] || '';

const getSecret = () => {
  return readEnv('WORK_SECTION_SECRET') || readEnv('WORK_SECTION_PASSWORD');
};

export const getWorkPassword = () => readEnv('WORK_SECTION_PASSWORD');

const sign = (value: string, secret: string) =>
  createHmac('sha256', secret).update(value).digest('hex');

export const createWorkAuthToken = () => {
  const secret = getSecret();
  if (!secret) return '';
  const signature = sign(`${TOKEN_PREFIX}:${TOKEN_PAYLOAD}`, secret);
  return `${TOKEN_PREFIX}.${signature}`;
};

export const isValidWorkAuthToken = (token: string | undefined | null) => {
  if (!token) return false;
  if (import.meta.env.DEV && token === WORK_AUTH_DEV_BYPASS_TOKEN) return true;
  const secret = getSecret();
  if (!secret) return false;

  const [prefix, receivedSig] = token.split('.');
  if (prefix !== TOKEN_PREFIX || !receivedSig) return false;

  const expectedSig = sign(`${TOKEN_PREFIX}:${TOKEN_PAYLOAD}`, secret);
  const expectedBuf = Buffer.from(expectedSig, 'hex');
  const receivedBuf = Buffer.from(receivedSig, 'hex');

  if (expectedBuf.length === 0 || expectedBuf.length !== receivedBuf.length) return false;
  return timingSafeEqual(expectedBuf, receivedBuf);
};

export const getWorkAuthCookieOptions = () => ({
  path: '/',
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: import.meta.env.PROD,
  maxAge: 60 * 60 * 8
});

export const normalizeWorkNextPath = (value: string | null | undefined) => {
  if (!value) return '/work';
  if (!value.startsWith('/work')) return '/work';
  if (value.startsWith('//')) return '/work';
  return value;
};
