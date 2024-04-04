import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	server: {
		open: true,
		port: 3000
	},
	plugins: [
		react(),
		svgr({
			include: "**/*.svg?react"
		})
	],
	build: {
		outDir: "./build"
	}
});
