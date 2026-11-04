import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu-marcas-component',
  standalone: false,
  styleUrl: './menu-marcas-component.css',
  templateUrl: './menu-marcas-component.html',
})

export class MenuMarcasComponent implements OnInit {

  // Array donde guardar las marcas
  public marcas!: string[];

  // Envío la marca al component padre
  // Output me permite comunicar el hijo con el padre
  // EventEmitter emite un dato con tipo txt
  @Output() marcaSeleccionada = new EventEmitter<string>();

  // Importar el service
  constructor (private service: ServiceCubos) {}

  // Al iniciar el component, solicito las marcas
  ngOnInit(): void {
    this.service.getMarcas().subscribe(response => {
      this.marcas = response;
      console.log("Marcas recibidas", response);
    });
  }

  // Emito la marca seleccionada
  // seleccionarMarca es el método que ejecuto al pulsar una marca
  seleccionarMarca(marca:string): void {
    // emit(marca) envía la marca seleccionada
    this.marcaSeleccionada.emit(marca);
  }
}
