import {builtinModules} from 'node:module';
import {defineConfig} from 'vite';
// @ts-ignore
import eslint from 'vite-plugin-eslint';

import {VitePluginNode} from 'vite-plugin-node';

const external = [...builtinModules, ...builtinModules.map((m) => `node:${m}`)];

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [
        ...VitePluginNode({
            adapter: 'express',
            appPath: './src/main.ts',
            exportName: 'VITE_PLUGIN_NODE',
            tsCompiler: 'swc',
            initAppOnBoot: true,
        }),
    ],

    server: {
        host: true,
    },

    build: {
        target: 'esnext',

        outDir: 'dist',
        assetsDir: '.',

        rollupOptions: {
            external,
            output: {
                format: 'cjs',
            },
        },

        emptyOutDir: true,
        reportCompressedSize: false,
    },

    ssr: {
        noExternal: command === 'build' || undefined,
        external,
    },

    optimizeDeps: {
        esbuildOptions: {
            tsconfigRaw: {
                compilerOptions: {
                    experimentalDecorators: true,
                },
            },
        },
    },
}));
