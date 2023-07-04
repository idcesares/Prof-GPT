export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","main.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.56c3818e.js","app":"_app/immutable/entry/app.4b960486.js","imports":["_app/immutable/entry/start.56c3818e.js","_app/immutable/chunks/index.c8c01468.js","_app/immutable/chunks/singletons.a9611330.js","_app/immutable/entry/app.4b960486.js","_app/immutable/chunks/index.c8c01468.js"],"stylesheets":[],"fonts":[]},
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
