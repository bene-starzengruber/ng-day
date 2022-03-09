import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DogService {

  constructor(private http: HttpClient) {

  }

  getDogImage(): Observable<string> {
    return this.http.get<{ message: string }>(`https://dog.ceo/api/breeds/image/random`).pipe(
      map(data => data.message)
    )
  }

}
