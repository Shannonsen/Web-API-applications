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

  ngOnInit() {
    this.servicio.busqueda('angular').then((response) => {
      //alert("Total:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}
