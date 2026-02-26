import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DST7gRQe.mjs';
import { manifest } from './manifest_CWX6C6Yl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/work-auth/dev-bypass.astro.mjs');
const _page3 = () => import('./pages/api/work-auth/login.astro.mjs');
const _page4 = () => import('./pages/api/work-auth/logout.astro.mjs');
const _page5 = () => import('./pages/experiments/_slug_.astro.mjs');
const _page6 = () => import('./pages/experiments.astro.mjs');
const _page7 = () => import('./pages/musings/_slug_.astro.mjs');
const _page8 = () => import('./pages/musings.astro.mjs');
const _page9 = () => import('./pages/work/_slug_.astro.mjs');
const _page10 = () => import('./pages/work.astro.mjs');
const _page11 = () => import('./pages/work-login.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/work-auth/dev-bypass.ts", _page2],
    ["src/pages/api/work-auth/login.ts", _page3],
    ["src/pages/api/work-auth/logout.ts", _page4],
    ["src/pages/experiments/[slug].astro", _page5],
    ["src/pages/experiments.astro", _page6],
    ["src/pages/musings/[slug].astro", _page7],
    ["src/pages/musings.astro", _page8],
    ["src/pages/work/[slug].astro", _page9],
    ["src/pages/work.astro", _page10],
    ["src/pages/work-login.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "35333992-17be-4d0a-a147-5c13de26b9fb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
