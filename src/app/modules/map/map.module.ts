import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { CaliMapComponent } from './components/cali-map/cali-map.component';

@NgModule({
  declarations: [MapComponent, CaliMapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule, 
  ],
})
export class MapModule {}
