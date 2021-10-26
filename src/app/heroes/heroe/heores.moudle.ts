import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListadoComponent } from '../listado/listado.component';
import { HeroeComponent } from './heroes.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
  ]
})

export class HeroesModule {}
