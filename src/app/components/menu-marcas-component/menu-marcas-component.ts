import { Component, OnInit } from '@angular/core';
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

  // Importar el service
  constructor (private service: ServiceCubos) {}

  // Al iniciar el component, solicito las marcas
  ngOnInit(): void {
    this.service.getMarcas().subscribe(response => {
      this.marcas = response;
      console.log("Marcas recibidas", response);
    });
  }
}
