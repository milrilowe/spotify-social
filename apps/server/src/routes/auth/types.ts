export interface SpotifyTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

export interface SpotifyUser {
    id: string;
    email: string;
    display_name: string;
    images: Image[];
    country: string;
}

export interface Image {
    url: string,
    height: number,
    width: number
}