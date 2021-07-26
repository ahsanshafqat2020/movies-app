import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule)
  },
  {
    path: 'movies/:id', loadChildren: () => import('./movie-details/movie-details.module').then(mod => mod.MovieDetailsModule)
  },
  {
    path: 'person/:id',
    loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }