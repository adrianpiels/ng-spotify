import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpotifyService } from "./spotify.service";
import { Album } from "./spotify.model";


@Component({
  selector: 'ap-app',
  templateUrl: './app.component.html',
  providers: [SpotifyService]
})
export class AppComponent {
  albums: Album[];
  query: FormControl = new FormControl();

  constructor(private spotiyService: SpotifyService) {
    this.query.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(v => {
        this.spotiyService.searchAlbums(v)
          .subscribe(a => {
            this.albums = a;
          });
      });

  }
}
