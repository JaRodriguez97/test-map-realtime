import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { IntroComponent } from './components/intro/intro.component';
import { FutureVisionComponent } from './components/future-vision/future-vision.component';


@NgModule({
  declarations: [
    StoryComponent,
    IntroComponent,
    FutureVisionComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule
  ]
})
export class StoryModule { }
