import { Component, NgModule } from '@angular/core';

@Component({
             selector: 'app-copyright',
             templateUrl: './copyright.component.html',
             styleUrls: ['./copyright.component.scss']
           })
export class CopyrightComponent {

}

@NgModule({
            declarations: [CopyrightComponent],
            exports: [CopyrightComponent]
          })
export class CopyrightModule {

}
