import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageInterface } from '../interfaces/image-interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url : string = environment.url;

  constructor(private http: HttpClient) { }


  getImages(): Observable<ImageInterface[]>{
    return this.http.get<ImageInterface[]>(`${this.url}/media`, this.httpHeader)
  }
}
