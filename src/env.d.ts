/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NAME: string;
  readonly ME_IMAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
