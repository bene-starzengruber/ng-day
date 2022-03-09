import { Pipe, PipeTransform } from '@angular/core';
import { ArtPiece } from '../art.model';

@Pipe({
        name: 'artSelected',
        pure: true
      })
export class ArtSelectedPipe implements PipeTransform {

  transform(value: ArtPiece, selection: Set<number>) {
    return selection.has(value.id);
  }

}
