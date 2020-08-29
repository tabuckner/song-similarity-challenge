import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';

const songsRoutes: Routes = [
  {
    path: '',
    component: SongsComponent,
    children: [
      {
        path: '',
        component: SongsListComponent
      },
      {
        path: '',
        redirectTo: 'songs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(songsRoutes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
