import { c as create_ssr_component, f as each, e as escape } from './ssr-kRdx30EW.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-cvg234">blog</h1> <ul>${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/about/" + escape(slug, true)}">${escape(title)}</a></li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-larG4cH0.js.map
