declare module '*.module.css';

interface ImportMetaEnv {
  VITE_TMDB_TOKEN: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
