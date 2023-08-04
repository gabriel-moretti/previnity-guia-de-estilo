export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1b59f492.js","app":"_app/immutable/entry/app.eb67de56.js","imports":["_app/immutable/entry/start.1b59f492.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.b269a571.js","_app/immutable/entry/app.eb67de56.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d684f268.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
