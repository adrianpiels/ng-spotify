import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Album, Track } from "./spotify.model";

@Injectable()
export class SpotifyService {
    constructor(private http: Http) {
    }

    searchAlbums(query: string): Observable<Album[]> {
        return this.http.get("https://api.spotify.com/v1/search?q=" + query + "&type=album")
            .map(res => res.json().albums.items);
    }

    public getTracks(albumId: string): Observable<Track[]> {
        return this.http.get("https://api.spotify.com/v1/albums/" + albumId)
            .map(res => res.json().tracks.items);
    }
}