import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { BehaviorSubject } from 'rxjs';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class ListRefreshService {
  //private _character: Character[];
  public character$ : BehaviorSubject<Character[]> = new BehaviorSubject(null);
  constructor(private characterService: CharacterService) { }

  getResultList(){
    this.characterService.getCharacterList().subscribe((data: any) =>{
      this.character$.next(data); 
    });
  }
  getSearchList(value:string){
    this.characterService.getSearchList(value).subscribe((data: any) =>{
      this.character$.next(data); 
    });
  }
  getSortedList(value:string){
    console.log(this.character$);
    let tempChar :Character[];
    this.character$.subscribe(data=>{
      tempChar = data;
    });
    if (value == 'desc') {
      this.character$.next( tempChar.sort((a, b) => (a.id < b.id) ? 1 : -1));
    }
    else if(value =='asc'){
      this.character$.next( tempChar.sort((a, b) => (b.id > a.id) ? -1 : 1))
    }

  }
}
