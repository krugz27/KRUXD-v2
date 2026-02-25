const WORK_AUTH_COOKIE = "kruxd_work_auth";
const isValidWorkAuthToken = (token) => {
  if (!token) return false;
  return false;
};
const normalizeWorkNextPath = (value) => {
  if (!value) return "/work";
  if (!value.startsWith("/work")) return "/work";
  if (value.startsWith("//")) return "/work";
  return value;
};

export { WORK_AUTH_COOKIE as W, isValidWorkAuthToken as i, normalizeWorkNextPath as n };
