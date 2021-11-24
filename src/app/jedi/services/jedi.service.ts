import { Injectable } from '@angular/core';
import { Jedi } from 'src/app/models/jedi.model';

@Injectable({
  providedIn: 'root'
})
export class JediService {

  constructor() {
    console.log('JedisService');
  }

  async getAll(): Promise<Jedi[]> {
    // TODO HTTP something
    return [
      { name: 'Yoda', midichlorian: 17_700 },
      { name: 'Anakin', midichlorian: 27_700 },
      { name: 'Qui-Gon Jinn', midichlorian: 10_000 },
    ];
  }
}
