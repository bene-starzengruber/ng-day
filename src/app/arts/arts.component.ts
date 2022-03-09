import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtPiece } from '../art.model';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent {

  @Input() arts: ArtPiece[];
  @Input() selection: Set<number>;

  @Output() selectionToggled = new EventEmitter<number>();

  showDog = false;

  public isSelected(art: ArtPiece, selection: Set<number>) {
    return selection.has(art.id);
  }

}


