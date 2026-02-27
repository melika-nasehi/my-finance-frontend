import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlansService {
  private apiUrl = 'http://127.0.0.1:8000/api/plans/assets/';

  constructor(private http: HttpClient) {}

  getAssets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteAsset(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}