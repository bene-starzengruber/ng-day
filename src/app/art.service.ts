import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtPiece, ArtPieceResponse, ArtResponse } from './art.model';
import { map, Observable } from 'rxjs';
import { mapArray } from './util/map-array';
import { isTruthy } from './util/is-truthy';
import { filterArray } from './util/filter-array';

@Injectable({ providedIn: 'root' })
export class ArtService {

  constructor(private http: HttpClient) {

  }

  getArt(): Observable<ArtPiece[]> {
    return this.http.get<ArtResponse>('https://api.artic.edu/api/v1/artworks?page=0&limit=15').pipe(
      map(response => response.data),
      isTruthy(),
      filterArray(artPiece => !this.isCopyrighted(artPiece)),
      mapArray(artPiece => this.simplifyArtPiece(artPiece)),
    );
  }

  private simplifyArtPiece(response: ArtPieceResponse): ArtPiece {
    return {
      id: response.id,
      title: response.title,
      imageUrl: `https://www.artic.edu/iiif/2/${response.image_id}/full/843,/0/default.jpg`,
      artist: response.artist_title
    };
  }

  private isCopyrighted(response: ArtPieceResponse) {
    return response.id === 186786;
  }


}
