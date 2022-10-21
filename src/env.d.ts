/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
