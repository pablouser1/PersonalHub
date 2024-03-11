/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ME_NAME: string;
  readonly ME_IMAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
