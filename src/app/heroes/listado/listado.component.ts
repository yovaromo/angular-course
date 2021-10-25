import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', "Superman", 'Iroman', "linterna verde"];
    heroeBorrado: string = '';
    borrarHeroe(){
      this.heroeBorrado = this.heroes.pop() || '';
    }
}
