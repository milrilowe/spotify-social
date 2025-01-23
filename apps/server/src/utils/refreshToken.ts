import 'dotenv/config'
import { SpotifyTokenResponse } from "../types";
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;

export async function refreshToken(spotifyTokens: SpotifyTokenResponse) {
    const { refresh_token } = spotifyTokens;
    const url = "https://accounts.spotify.com/api/token";

    if (!refresh_token && !SPOTIFY_CLIENT_ID) throw new Error('Error refreshing token: make sure SPOTIFY_CLIENT_ID is an env variable')

    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token,
            client_id: SPOTIFY_CLIENT_ID!
        })
    }

    const refreshTokenResponse = await fetch(url, payload);
    return await refreshTokenResponse.json() as SpotifyTokenResponse;


}