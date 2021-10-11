import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default [
    {
    	input: 'src/main.js',
    	output: {
    		sourcemap: true,
    		format: 'iife',
    		name: 'app',
    		file: 'public/build/bundle.js'
    	},
    	plugins: [
    		svelte({
    			compilerOptions: {
    				// enable run-time checks when not in production
    				dev: !production
    			}
    		}),
    		// we'll extract any component CSS out into
    		// a separate file - better for performance
    		css({ output: 'bundle.css' }),

    		// If you have external dependencies installed from
    		// npm, you'll most likely need these plugins. In
    		// some cases you'll need additional configuration -
    		// consult the documentation for details:
    		// https://github.com/rollup/plugins/tree/master/packages/commonjs
    		resolve({
    			browser: true,
    			dedupe: ['svelte']
    		}),
    		commonjs(),

    		// In dev mode, call `npm run start` once
    		// the bundle has been generated
    		!production && serve(),

    		// Watch the `public` directory and refresh the
    		// browser on changes when not in production
    		!production && livereload('public'),

    		// If we're building for production (npm run build
    		// instead of npm run dev), minify
    		production && terser()
    	],
    	watch: {
    		clearScreen: false
    	}
    },
    {
        input: 'src/wally.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/wally.js'
        },
        plugins: [
            svelte({
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production
                }
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: 'wally.css' }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: 'src/hitw.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/hitw.js'
        },
        plugins: [
            svelte({
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production
                }
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: 'hitw.css' }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: 'src/quake.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/quake.js'
        },
        plugins: [
            svelte({
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production
                }
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: 'quake.css' }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: 'src/pong.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/pong.js'
        },
        plugins: [
            svelte({
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production
                }
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: 'pong.css' }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: 'src/pixel.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/pixel.js'
        },
        plugins: [
            svelte({
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production
                }
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: 'pixel.css' }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: 'src/priv.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/priv.js'
        },
        plugins: [
            svelte({
                compilerOptions: {
                    // enable run-time checks when not in production
                    dev: !production
                }
            }),
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css({ output: 'priv.css' }),

            // If you have external dependencies installed from
            // npm, you'll most likely need these plugins. In
            // some cases you'll need additional configuration -
            // consult the documentation for details:
            // https://github.com/rollup/plugins/tree/master/packages/commonjs
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),

            // In dev mode, call `npm run start` once
            // the bundle has been generated
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ],
        watch: {
            clearScreen: false
        }
    }
]
