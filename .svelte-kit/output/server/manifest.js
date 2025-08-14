export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"app/immutable/entry/start.CfX4bqfy.js",app:"app/immutable/entry/app.D88WHxqb.js",imports:["app/immutable/entry/start.CfX4bqfy.js","app/immutable/chunks/Dg3i1Itq.js","app/immutable/chunks/zGOef0MJ.js","app/immutable/chunks/BCIngyBL.js","app/immutable/chunks/BKdCuxKZ.js","app/immutable/entry/app.D88WHxqb.js","app/immutable/chunks/BCIngyBL.js","app/immutable/chunks/zGOef0MJ.js","app/immutable/chunks/BKdCuxKZ.js","app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
