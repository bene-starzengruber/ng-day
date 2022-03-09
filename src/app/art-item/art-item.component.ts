import { Component, Input } from '@angular/core';
import { ArtPiece } from '../art.model';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.scss']
})
export class ArtItemComponent {

  @Input() art: ArtPiece;
  @Input() selected: boolean;

  artistVisible = true;

  showOrHideArtist(entry: ResizeObserverEntry) {
    this.artistVisible = entry.contentRect.height < 20;
  }
}
