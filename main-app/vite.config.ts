import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(), // default
  base: "./",
  publicDir: "public", // default
  cacheDir: "node_modules/.vite", // default
  // 定义全局常量替换方式
  define: {},
  envDir: "./env", // 环境变量的存储路径
  logLevel: "info", // default
  clearScreen: false, // 默认值为true。调试时设置为false，可以看到更多信息
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, "dist"),
    assetsDir: "static",
    emptyOutDir: false,
    target: "esnext", // default，最低为es2015
    cssCodeSplit: true, // default
    sourcemap: false, // default
    // 最小化混淆。terser速度慢、文件体积小；esbuild速度快、文件体积大
    // minify: "terser",
    // terserOptions: {
    //   compress: {
    //     keep_infinity: true,
    //     // 去除打印
    //     drop_console: true,
    //   },
    // },
    // // chunk 大小警告的限制（以 kbs 为单位）。
    // chunkSizeWarningLimit: 1024,
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       vue: ["vue"],
    //       // vue: ["vue", "vue-router"],
    //     },
    //   },
    // },
  },
  server: {
    host: "0.0.0.0",
    port: 80,
    cors: true,
    // proxy: {
    //   "/api/": {
    //     target: "http://192.168.1.1:3000",
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
});
