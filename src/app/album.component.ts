import { Component, Input, OnInit } from '@angular/core';
import { Album, Track } from "./spotify.model";
import { SpotifyService } from "./spotify.service";

@Component({
    selector: 'ap-album',
    templateUrl: './album.component.html',
    providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {

    @Input()
    album: Album;
    tracks: Track[];

    audioObject: any;
    playing: boolean;
    playable: boolean;

    constructor(private spotifyService: SpotifyService) {
    }

    ngOnInit(): void {

        let self = this;

        this.spotifyService.getTracks(this.album.id)
            .subscribe((tracks: Track[]) => {
                self.tracks = tracks;
                self.playable = this.tracks.some((track) => {
                    return track.preview_url !== null;
                })
            });
    }

    public preview(): void {

        let track = this.tracks.find((track) => {
            return track.preview_url != null;
        })

        if (this.audioObject == undefined || this.audioObject.paused) {
            this.audioObject = new Audio(track.preview_url);
            this.audioObject.play();

            this.playing = true;
        }
        else {
            this.audioObject.pause();
            this.playing = false;
        }
    }
}