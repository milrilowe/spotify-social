declare namespace NodeJS {
    interface ProcessEnv {
        SPOTIFY_CLIENT_ID: string;
        SPOTIFY_CLIENT_SECRET: CipherKey;
        SPOTIFY_REDIRECT_URI: string;
    }
}