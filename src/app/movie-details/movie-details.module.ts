import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MovieDetailsComponent,
   // AppMovieDialogComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatIconModule,
    MatIconModule,
    CarouselModule
  ],

})
export class MovieDetailsModule { }
