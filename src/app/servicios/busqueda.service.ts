import { Injectable } from '@angular/core';

import { Busqueda } from '../interfaces/busqueda';
import { HttpClient } from '@angular/common/http';
import { SubscribableOrPromise } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BusquedaService {


  cachedValues: Array<{
    [query: string]: Busqueda
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

}

export function adicion(firstNumber: number, secondNumber: number){
  return firstNumber + secondNumber;
}
