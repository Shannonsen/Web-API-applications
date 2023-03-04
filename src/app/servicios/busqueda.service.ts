import { Injectable } from '@angular/core';

import { Busqueda } from '../interfaces/busqueda';
import { HttpClient } from '@angular/common/http';
import { SubscribableOrPromise } from 'rxjs';
import { BusquedaAnimalCrossing } from '../interfaces/busquedaAnimalCrossing';

@Injectable({
  providedIn: 'root'
})

export class BusquedaService {


  cachedValues: Array<{
    [query: string]: Busqueda
  }> = [];

  cachedAC: Array<{
    [query: string]: BusquedaAnimalCrossing
  }> = [];

  constructor(private http: HttpClient) {
  }

  busqueda = (query: string): Promise<Busqueda> => {
    let promise = new Promise<Busqueda>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      } else {
        this.http.get('https://api.github.com/search/repositories?q=' + query)
          .toPromise()
          .then((response) => {
            resolve(response as Busqueda)
          }, (error) => {
            reject(error);
          })
      }
    })
    return promise;
  }

  // Link del API utilizado https://acnhapi.com/
  busquedaAC = (query: string): Promise<BusquedaAnimalCrossing> => {
    let promise = new Promise<BusquedaAnimalCrossing>((resolve, reject) => {
      if (this.cachedAC[query]) {
        resolve(this.cachedAC[query])
      } else {
        this.http.get('http://acnhapi.com/v1/villagers/1' + query)
          .toPromise()
          .then((response) => {
            resolve(response as BusquedaAnimalCrossing)
          }, (error) => {
            reject(error);
          })
      }
    })
    return promise;
  }

}
