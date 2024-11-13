import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { ResourceManagerComponent } from './components/resource-manager/resource-manager.component';


@NgModule({
  declarations: [
    ResourcesComponent,
    ResourceManagerComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
