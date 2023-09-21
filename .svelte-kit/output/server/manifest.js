export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","main.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.a61993f6.js","app":"_app/immutable/entry/app.33c7b779.js","imports":["_app/immutable/entry/start.a61993f6.js","_app/immutable/chunks/index.c8c01468.js","_app/immutable/chunks/singletons.98c32ab4.js","_app/immutable/entry/app.33c7b779.js","_app/immutable/chunks/index.c8c01468.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
