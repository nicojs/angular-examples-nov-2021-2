import { Injectable } from '@angular/core';
import { Jedi } from 'src/app/models/jedi.model';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JediService {

  constructor(private http: HttpClient) {
    console.log('JedisService');
  }

  async getAll(): Promise<Jedi[]> {
    return lastValueFrom(this.http.get<Jedi[]>('http://localhost:3000/jedis'));
  }
}
