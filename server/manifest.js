const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.WpdJDFJa.js","app":"_app/immutable/entry/app.KSsNuxtz.js","imports":["_app/immutable/entry/start.WpdJDFJa.js","_app/immutable/chunks/entry.z8jdMf1u.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.KSsNuxtz.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.ywM3_Z0D.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-TG4zLHsx.js')),
			__memo(() => import('./chunks/1-Tt0xXoEe.js')),
			__memo(() => import('./chunks/2-ucVr3GcG.js')),
			__memo(() => import('./chunks/3-VSIUjF55.js')),
			__memo(() => import('./chunks/4-H4A5gyqH.js')),
			__memo(() => import('./chunks/5-uFGykfW4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/about/[slug]",
				pattern: /^\/about\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
