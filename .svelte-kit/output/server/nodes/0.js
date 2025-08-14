import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["app/immutable/nodes/0.BePwMS9g.js","app/immutable/chunks/DsnmJJEf.js","app/immutable/chunks/BCIngyBL.js","app/immutable/chunks/BKdCuxKZ.js"];
export const stylesheets = ["app/immutable/assets/0.DNyseGkR.css"];
export const fonts = [];
