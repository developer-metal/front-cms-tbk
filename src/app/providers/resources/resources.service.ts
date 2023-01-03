import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, map, from, throwError } from 'rxjs';
import { ResourcesCMS } from '../../interfaces/resources.interface';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private apiURL:string = environment.urlData;
  constructor(private httpClientService: HttpClient) { }

  private errorWithTimestamp = throwError(() => {
    const error: any = {
      code: '500',
      data: 'Error en la solicitud'
    };
    return error;
  });


  public getDataResourcess(): Observable<any> {
    return this.httpClientService
      .get<ResourcesCMS[]>(`${this.apiURL}media`)
      .pipe(catchError(() => this.errorWithTimestamp));
  }
}

