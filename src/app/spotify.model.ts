export interface SpotifyResponse {
    albums: {
        items: Album[];
    }
}

export interface Album {
    name: string;
}