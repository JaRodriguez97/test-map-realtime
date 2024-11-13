import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'story',
    loadChildren: () =>
      import('./modules/story/story.module').then((m) => m.StoryModule),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./modules/map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./modules/resources/resources.module').then(
        (m) => m.ResourcesModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
