import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd())); //loadEnv(mode, process.cwd());
  const port = parseInt(env.VITE_PORT) || 8080;

  console.log("backend url", env.VITE_BACKEND_URL);

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // test: {
    //   globals: true,
    // },
    server: {
      port: port,
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL,
          // env.VITE_NODE_ENV === "development"
          //   ? "http://localhost:3000/"
          //   : process.env.VITE_BACKEND_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
