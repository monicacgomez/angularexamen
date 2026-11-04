import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-cubo-component',
  standalone: false,
  styleUrl: './cubo-component.css',
  templateUrl: './cubo-component.html',
})

export class CuboComponent {
  // Recibo un cubo desde el component padre
  // Input me permite recibir la info desde otro component
  // Cubo es el objeto que recibiré
  @Input() cubo!: Cubo

  // Output permite enviar info al componente padre
  @Output() favoritoSeleccionado = new EventEmitter<Cubo>();

  // Envío el cubo seleccionado al padre
  seleccionarFavorito(): void {
    this.favoritoSeleccionado.emit(this.cubo);
  }
}
