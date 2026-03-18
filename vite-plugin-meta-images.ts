import type { Plugin } from "vite";

export function metaImagesPlugin(): Plugin {
  return {
    name: "meta-images-plugin",
  };
}

export default function log(...args: any[]) {
  if (process.env.NODE_ENV === "production") console.log(...args);
}
