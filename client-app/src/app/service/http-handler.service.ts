import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IIndex } from '../../../../common/IIndex';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private httpClient: HttpClient) { }
  
  getIndex(): Observable<IIndex> {
    return this.httpClient.get<IIndex>('http://localhost:3000/');
  }
}
