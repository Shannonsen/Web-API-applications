import { Component } from '@angular/core';

import { BusquedaService } from './servicios/busqueda.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-base01';

  constructor(private servicio: BusquedaService) { }

  /*   ngOnInit() {
      this.servicio.busqueda('angular').then((response) => {
        alert("Total:" + response.total_count);
      }, (error) => {
        alert("Error: " + error.statusText)
      })
    } */

  ngOnInit() {
    this.servicio.busquedaAC('50').then((response) => {
      alert("Image character: " + response.image_uri + " Specie: " + response.species);
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
