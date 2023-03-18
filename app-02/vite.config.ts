import { defineConfig } from "vite";
import qiankun from "vite-plugin-qiankun";
import vue from "@vitejs/plugin-vue";

// useDevMode 开启时与热更新插件冲突
const useDevMode = true;
// https://vitejs.dev/config/
export default ({ mode }) => {
  const __DEV__ = mode === "development";
  return defineConfig({
    plugins: [
      vue(),
      qiankun("sub-app-02", {
        useDevMode: true,
      }),
    ],
    server: {
      port: 8082,
      host: "0.0.0.0",
      // 设置源是因为图片资源会找错位置所以通过这个让图片等资源不会找错
      origin: "//localhost:8082",
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    base: __DEV__ ? "/" : "//localhost:8082",
  });
};
