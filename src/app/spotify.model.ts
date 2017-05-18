export interface Album {
    id: string,
    name: string,
    images: {
        url: string;
    }
}

export interface Track {
    name: string,
    preview_url: string
}