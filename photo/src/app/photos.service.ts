import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageResponse } from 'src/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  baseUrl: string = "https://api.unsplash.com/";
  headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Client-ID AbrGdIlbWxWtWmGGcTYvXBtspqcYwRdL9rlNqGzrjNM'
  });

  constructor(private http: HttpClient) { }

  public getRandomPhoto(): Observable<ImageResponse> {
    return this.http.get<ImageResponse>(this.baseUrl + 'photos/random', { headers: this.headers });
  }
}
