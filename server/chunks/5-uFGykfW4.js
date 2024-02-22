import { e as error } from './index-q5FEf9Bi.js';
import { p as posts } from './data-avSVo7kZ.js';

function load({ params }) {
  const post = posts.find((post2) => post2.slug === params.slug);
  if (!post)
    throw error(404);
  return {
    post
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-suuBW-In.js')).default;
const server_id = "src/routes/about/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/5.RCeu1Fs2.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.ywM3_Z0D.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-uFGykfW4.js.map
