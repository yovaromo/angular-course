import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Iroman';
  edad: number = 0;

  get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre(): void{
    this.nombre ="Yova";
  }

  cambiarEdad(): void {
    this.edad = 49;
  }

}
