import { timingSafeEqual, createHmac } from 'node:crypto';
import { Buffer } from 'node:buffer';
import process from 'node:process';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const WORK_AUTH_COOKIE = "kruxd_work_auth";
const WORK_AUTH_DEV_BYPASS_TOKEN = "dev-bypass";
const TOKEN_PREFIX = "v1";
const TOKEN_PAYLOAD = "work-access";
const readEnv = (key) => Object.assign(__vite_import_meta_env__, { _: process.env._ })[key] || process.env[key] || "";
const getSecret = () => {
  return readEnv("WORK_SECTION_SECRET") || readEnv("WORK_SECTION_PASSWORD");
};
const getWorkPassword = () => readEnv("WORK_SECTION_PASSWORD");
const sign = (value, secret) => createHmac("sha256", secret).update(value).digest("hex");
const createWorkAuthToken = () => {
  const secret = getSecret();
  if (!secret) return "";
  const signature = sign(`${TOKEN_PREFIX}:${TOKEN_PAYLOAD}`, secret);
  return `${TOKEN_PREFIX}.${signature}`;
};
const isValidWorkAuthToken = (token) => {
  if (!token) return false;
  if (Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV && token === WORK_AUTH_DEV_BYPASS_TOKEN) return true;
  const secret = getSecret();
  if (!secret) return false;
  const [prefix, receivedSig] = token.split(".");
  if (prefix !== TOKEN_PREFIX || !receivedSig) return false;
  const expectedSig = sign(`${TOKEN_PREFIX}:${TOKEN_PAYLOAD}`, secret);
  const expectedBuf = Buffer.from(expectedSig, "hex");
  const receivedBuf = Buffer.from(receivedSig, "hex");
  if (expectedBuf.length === 0 || expectedBuf.length !== receivedBuf.length) return false;
  return timingSafeEqual(expectedBuf, receivedBuf);
};
const getWorkAuthCookieOptions = () => ({
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  secure: Object.assign(__vite_import_meta_env__, { _: process.env._ }).PROD,
  maxAge: 60 * 60 * 8
});
const normalizeWorkNextPath = (value) => {
  if (!value) return "/work";
  if (!value.startsWith("/work")) return "/work";
  if (value.startsWith("//")) return "/work";
  return value;
};

export { WORK_AUTH_COOKIE as W, getWorkAuthCookieOptions as a, createWorkAuthToken as c, getWorkPassword as g, isValidWorkAuthToken as i, normalizeWorkNextPath as n };
