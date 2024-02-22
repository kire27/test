import { p as posts } from './data-avSVo7kZ.js';

function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-larG4cH0.js')).default;
const server_id = "src/routes/about/+page.server.js";
const imports = ["_app/immutable/nodes/4.JsXK6Rey.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.ywM3_Z0D.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-H4A5gyqH.js.map
