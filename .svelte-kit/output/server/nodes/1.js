

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e39b0de6.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d684f268.js","_app/immutable/chunks/singletons.b269a571.js"];
export const stylesheets = [];
export const fonts = [];
