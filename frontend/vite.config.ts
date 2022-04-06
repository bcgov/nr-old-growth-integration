import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  // const env = loadEnv(mode, process.cwd());
  const port = parseInt(process.env.VITE_PORT) || 8080;

  console.log("backend url", process.env.VITE_BACKEND_URL);

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
          target:
            process.env.VITE_NODE_ENV === "development"
              ? "http://localhost:3000/"
              : process.env.VITE_BACKEND_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
