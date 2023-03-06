import { Component, OnInit } from '@angular/core';

import {BusquedaService} from '../../servicios/busqueda.service';
import { Busqueda } from 'src/app/interfaces/busqueda';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  title = 'angular-base01';

  resultado !: Busqueda;

  constructor(private servicio: BusquedaService){}

  ngOnInit() {
    this.servicio.busqueda('angular').then((response) => {
      /* alert("Total:" + response.total_count); */
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  busquedaGit = (query: string) => {
    this.servicio.busqueda(query).then((response) => {
      //alert("Total:" + response.total_count);
      this.resultado = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }


}
