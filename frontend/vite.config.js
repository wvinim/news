import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    preview: {
      host: true,
      strictPort: true,
      port: parseInt(process.env.VITE_CLIENT_PORT),
    },
    server: {
      host: true,
      strictPort: true,
      port: parseInt(process.env.VITE_CLIENT_PORT),
    },
  });
};
