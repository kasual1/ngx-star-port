import { NgModule } from '@angular/core';
import { StarPortComponent } from './components/star-port.component';
import { StarPortCarrierComponent } from './components/star-port-carrier.component';
import {PortalModule} from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StarPortComponent,
    StarPortCarrierComponent,
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    StarPortComponent,
    StarPortCarrierComponent
  ]
})
export class NgxStarPortModule { }
