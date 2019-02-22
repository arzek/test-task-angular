import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { StopResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  constructor(private http: HttpService) { }

  getStopById(stopId: string): Promise<StopResponse> {
    return this.http.get(`${environment.stopApi}/?id=${stopId}`);
  }
}
