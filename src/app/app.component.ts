import { Component } from '@angular/core';
import { ArtPiece } from './art.model';
import { Observable } from 'rxjs';
import { ArtService } from './art.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss']
           })
export class AppComponent {

  selection = new Set<number>();
  art$: Observable<ArtPiece[]>;

  constructor(private artService: ArtService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.art$ = this.artService.getArt();
  }

  openCopyrightDialog() {
    this.preloadCopyright().then(scam => {
      this.matDialog.open(scam.CopyrightComponent);
    });
  }

  preloadCopyright() {
    return import('./copyright/copyright.component')
  }

  toggleSelection(id: number): void {
    const nextSelection = new Set(this.selection);
    if (nextSelection.has(id)) {
      nextSelection.delete(id);
    } else {
      nextSelection.add(id);
    }

    this.selection = nextSelection;
  }

}
