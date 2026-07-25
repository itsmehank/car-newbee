import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// 로컬 dev는 "/", 프로덕션 빌드(GitHub Pages 프로젝트 페이지)는 "/car-newbee/"로 서빙.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/car-newbee/" : "/",
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
}));
