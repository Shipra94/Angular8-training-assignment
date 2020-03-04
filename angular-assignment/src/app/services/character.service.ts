import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Character } from '../models/character';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  //public _data:Observable<Character[]>;
  //data = this.charaterSubject.asObservable();
  
  constructor(private http: HttpClient) { }
  getCharacterList(){
    return this.http.get<Character[]>(`${environment.apiEndPoint}/results`);
  }
  getSearchList(name:string): Observable<Character[]>{
    return this.http.get<Character[]>(`${environment.apiEndPoint}/results?name=${name}`);
  }
}
