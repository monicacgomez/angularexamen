import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cubo} from '../models/cubo';

@Injectable({
  providedIn: 'root',
})
export class ServiceCubos { 
    private urlApi= 'https://apitiendacubos2025a.azurewebsites.net/api/Cubos';
    
    constructor(private http: HttpClient) {}

    getCubos(): Observable<Cubo[]> {
        return this.http.get<Cubo[]>(this.urlApi);
    }

    getMarcas(): Observable<string[]> {
        return this.http.get<string[]>(this.urlApi + '/Marcas');
    }

    getCubosMarca(marca: string): Observable<Cubo[]> {
        return this.http.get<Cubo[]>(this.urlApi + '/CubosMarca/' + marca);
    }

    getCubo(id: number): Observable<Cubo> {
        return this.http.get<Cubo>(this.urlApi + '/' + id);
    }
}