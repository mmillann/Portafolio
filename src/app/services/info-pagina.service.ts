import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) { 
    console.log('Servicio de infoPagina listo');

    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp=>{
      console.log(resp);
    })
  }

}
