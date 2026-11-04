import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/cubo';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})

// OnInit permite ejecutar código cuando se inicia el componente
export class HomeComponent implements OnInit {

  // Cubo importa el modelo y "Cubos" es la variable donde guardaré los datos
  public cubos!: Cubo[];

  // ServiceCubos importa el servicio
  constructor(private service: ServiceCubos) {}
  
  // ngOnInit solicita los cubos a través de getCubos
  // subscribe, recibo la respuesta del API y la guardo en this.cubos
  ngOnInit(): void {
    this.service.getCubos().subscribe({
      next: response => {
        this.cubos = response;
        console.log("Cubos recibidos:", response);
      },
      error: error => {
        console.log("Error al cargar los cubos", error);
      }
    });
  }
}