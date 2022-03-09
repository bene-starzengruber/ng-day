import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtsComponent } from './arts/arts.component';
import { CommonModule } from '@angular/common';
import { ArtItemComponent } from './art-item/art-item.component';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ArtSelectedPipe } from './arts/art-selected.pipe';
import { WrapFnPipe } from './util/wrap-fn.pipe';
import { ResizeObserverDirective } from './util/resize-observer.directive';
import { InViewportDirective } from './util/in-viewport.directive';
import { DogComponent } from './dog/dog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
            declarations: [
              AppComponent, ArtsComponent, ArtItemComponent, ArtSelectedPipe, WrapFnPipe, ResizeObserverDirective, InViewportDirective,
              DogComponent
            ],
            imports: [BrowserModule, CommonModule, HttpClientModule, MatIconModule, NoopAnimationsModule, MatDialogModule],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
