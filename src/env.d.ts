/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly LOCAL_HOST: string;
  readonly SERVICE_ID: string;
  readonly TEMPLATE_ID: string;
  readonly PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
