
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const npm_config_cache: string;
	export const XDG_SESSION_PATH: string;
	export const fish_color_cancel: string;
	export const fish_pager_color_completion: string;
	export const npm_config_resolution_mode: string;
	export const NODE: string;
	export const fish_color_command: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const npm_config_globalconfig: string;
	export const EDITOR: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const fish_pager_color_secondary_background: string;
	export const fish_color_end: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const fish_color_param: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_config_init_module: string;
	export const OMF_PATH: string;
	export const XAUTHORITY: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const fish_pager_color_progress: string;
	export const fish_pager_color_secondary_description: string;
	export const MOTD_SHOWN: string;
	export const fish_color_host_remote: string;
	export const fish_color_operator: string;
	export const HOME: string;
	export const fish_pager_color_background: string;
	export const LANG: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const npm_package_version: string;
	export const fish_pager_color_selected_completion: string;
	export const fish_pager_color_secondary_completion: string;
	export const fish_color_host: string;
	export const fish_color_redirection: string;
	export const XDG_SEAT_PATH: string;
	export const fish_pager_color_secondary_prefix: string;
	export const INIT_CWD: string;
	export const fish_color_comment: string;
	export const fish_color_cwd: string;
	export const ALACRITTY_SOCKET: string;
	export const npm_lifecycle_script: string;
	export const NVM_DIR: string;
	export const npm_config_npm_version: string;
	export const fish_color_selection: string;
	export const fish_pager_color_selected_description: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const fish_color_autosuggestion: string;
	export const fish_color_option: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const fish_color_quote: string;
	export const fish_color_normal: string;
	export const fish_color_user: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const fish_pager_color_selected_background: string;
	export const fish_color_keyword: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const fish_color_error: string;
	export const fish_pager_color_selected_prefix: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const NVM_HAS_RUN: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const ALACRITTY_LOG: string;
	export const GDMSESSION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_global_prefix: string;
	export const fish_color_search_match: string;
	export const MAIL: string;
	export const fish_pager_color_prefix: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const OMF_CONFIG: string;
	export const fish_color_escape: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const fish_pager_color_description: string;
	export const _: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		WINDOWID: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		npm_config_cache: string;
		XDG_SESSION_PATH: string;
		fish_color_cancel: string;
		fish_pager_color_completion: string;
		npm_config_resolution_mode: string;
		NODE: string;
		fish_color_command: string;
		COLOR: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		npm_config_globalconfig: string;
		EDITOR: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		fish_pager_color_secondary_background: string;
		fish_color_end: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		fish_color_param: string;
		XDG_SESSION_TYPE: string;
		npm_config_init_module: string;
		OMF_PATH: string;
		XAUTHORITY: string;
		XDG_GREETER_DATA_DIR: string;
		fish_pager_color_progress: string;
		fish_pager_color_secondary_description: string;
		MOTD_SHOWN: string;
		fish_color_host_remote: string;
		fish_color_operator: string;
		HOME: string;
		fish_pager_color_background: string;
		LANG: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		npm_package_version: string;
		fish_pager_color_selected_completion: string;
		fish_pager_color_secondary_completion: string;
		fish_color_host: string;
		fish_color_redirection: string;
		XDG_SEAT_PATH: string;
		fish_pager_color_secondary_prefix: string;
		INIT_CWD: string;
		fish_color_comment: string;
		fish_color_cwd: string;
		ALACRITTY_SOCKET: string;
		npm_lifecycle_script: string;
		NVM_DIR: string;
		npm_config_npm_version: string;
		fish_color_selection: string;
		fish_pager_color_selected_description: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		fish_color_autosuggestion: string;
		fish_color_option: string;
		npm_config_prefix: string;
		USER: string;
		fish_color_quote: string;
		fish_color_normal: string;
		fish_color_user: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		fish_pager_color_selected_background: string;
		fish_color_keyword: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		fish_color_error: string;
		fish_pager_color_selected_prefix: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		NVM_HAS_RUN: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		ALACRITTY_LOG: string;
		GDMSESSION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_global_prefix: string;
		fish_color_search_match: string;
		MAIL: string;
		fish_pager_color_prefix: string;
		ALACRITTY_WINDOW_ID: string;
		OMF_CONFIG: string;
		fish_color_escape: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		fish_pager_color_description: string;
		_: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
