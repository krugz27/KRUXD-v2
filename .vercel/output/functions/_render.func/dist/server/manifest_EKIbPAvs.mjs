import 'piccolore';
import { k as decodeKey } from './chunks/astro/server_C-_fF5rL.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_CIerKPBV.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DesM1fY_.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/adamkrueger/Project%20Files/Codex%20Projects/KRUXD%20v2/","cacheDir":"file:///Users/adamkrueger/Project%20Files/Codex%20Projects/KRUXD%20v2/node_modules/.astro/","outDir":"file:///Users/adamkrueger/Project%20Files/Codex%20Projects/KRUXD%20v2/dist/","srcDir":"file:///Users/adamkrueger/Project%20Files/Codex%20Projects/KRUXD%20v2/src/","publicDir":"file:///Users/adamkrueger/Project%20Files/Codex%20Projects/KRUXD%20v2/public/","buildClientDir":"file:///Users/adamkrueger/Project%20Files/Codex%20Projects/KRUXD%20v2/dist/client/","buildServerDir":"file:///Users/adamkrueger/Project%20Files/Codex%20Projects/KRUXD%20v2/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"experiments/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experiments","isIndex":false,"type":"page","pattern":"^\\/experiments\\/?$","segments":[[{"content":"experiments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experiments.astro","pathname":"/experiments","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"musings/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/musings","isIndex":false,"type":"page","pattern":"^\\/musings\\/?$","segments":[[{"content":"musings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/musings.astro","pathname":"/musings","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/work-auth/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/work-auth\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"work-auth","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/work-auth/login.ts","pathname":"/api/work-auth/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/work-auth/logout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/work-auth\\/logout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"work-auth","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/work-auth/logout.ts","pathname":"/api/work-auth/logout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcdvq-v8.css"}],"routeData":{"route":"/work/[slug]","isIndex":false,"type":"page","pattern":"^\\/work\\/([^/]+?)\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/work/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcdvq-v8.css"}],"routeData":{"route":"/work","isIndex":false,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bcdvq-v8.css"},{"type":"inline","content":".work-login-form[data-astro-cid-g3ncwfns]{max-width:34rem;display:grid;gap:.75rem}.work-login-label[data-astro-cid-g3ncwfns]{font-family:DotGothic16,monospace;font-size:.95rem;letter-spacing:.03em;text-transform:uppercase;color:#3d2d22}.work-login-input[data-astro-cid-g3ncwfns]{width:100%;min-height:2.8rem;padding:.55rem .7rem;border:2px solid #5d4a40;background:#f6efe0db;color:#1f1712;font:inherit;box-shadow:inset 0 0 0 1px #ffe8bea6}.work-login-input[data-astro-cid-g3ncwfns]:focus{outline:2px solid rgba(218,160,46,.75);outline-offset:2px}.work-login-error[data-astro-cid-g3ncwfns]{margin:0;color:#8e2e18;font-weight:600}.work-login-actions[data-astro-cid-g3ncwfns]{display:flex;flex-wrap:wrap;gap:.65rem;align-items:center}.work-login-submit[data-astro-cid-g3ncwfns],.work-login-cancel[data-astro-cid-g3ncwfns]{min-height:2.5rem;padding:.45rem .75rem;border:2px solid #291d17;background:linear-gradient(180deg,#3e3335,#2c2324 60%,#1d1719);color:#f7d69a;text-decoration:none;font-family:Literata,serif;font-size:.95rem;font-weight:600;line-height:1;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;box-shadow:inset 0 0 0 1px #ffe4a638,inset 0 0 0 3px #0003}.work-login-submit[data-astro-cid-g3ncwfns]:hover,.work-login-cancel[data-astro-cid-g3ncwfns]:hover{background:linear-gradient(180deg,#4e3d2f,#342821 58%,#231b17);color:#ffefbe}\n"}],"routeData":{"route":"/work-login","isIndex":false,"type":"page","pattern":"^\\/work-login\\/?$","segments":[[{"content":"work-login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work-login.astro","pathname":"/work-login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/experiments.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/experiments@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/experiments/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/experiments/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/musings.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/musings@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/musings/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/musings/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/pages/work-login.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/work-auth/login@_@ts":"pages/api/work-auth/login.astro.mjs","\u0000@astro-page:src/pages/api/work-auth/logout@_@ts":"pages/api/work-auth/logout.astro.mjs","\u0000@astro-page:src/pages/experiments/[slug]@_@astro":"pages/experiments/_slug_.astro.mjs","\u0000@astro-page:src/pages/experiments@_@astro":"pages/experiments.astro.mjs","\u0000@astro-page:src/pages/musings/[slug]@_@astro":"pages/musings/_slug_.astro.mjs","\u0000@astro-page:src/pages/musings@_@astro":"pages/musings.astro.mjs","\u0000@astro-page:src/pages/work/[slug]@_@astro":"pages/work/_slug_.astro.mjs","\u0000@astro-page:src/pages/work@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/work-login@_@astro":"pages/work-login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_EKIbPAvs.mjs","/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CidJaJhR.mjs","/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D_wagQYG.mjs","/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.BxYk3MJf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.Bcdvq-v8.css","/_astro/BaseLayout.astro_astro_type_script_index_0_lang.BxYk3MJf.js","/images/8-bit-me-looking.png","/images/8-bit-me.png","/images/8-pixel-big-wide.png","/images/KRUXD-Shield.png","/images/placeholder-thumb.svg","/images/pointing-hand-cursor.svg","/images/sample-aviation.png","/images/sample-gas-pump.png","/images/sample-stock-market.png","/images/sample-storm.png","/images/sample-wind-farm.png","/images/site-bg-1.png","/images/site-bg-2.png","/images/site-bg-3.png","/images/site-bg-4.png","/images/site-bg-5.png","/images/site-bg-6.png","/images/thumb-eco-v2.png","/images/thumb-fuel-hub.png","/about/index.html","/experiments/index.html","/musings/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"YdyPTu62JvlLqg6g+isbr6A4W7yAHEiuiCMwn6LXpQk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
