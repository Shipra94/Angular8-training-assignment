import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { ListRefreshService } from 'src/app/services/list-refresh.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters : Character[];
  charactersSubscription : Subscription;
  constructor(private listrefresh: ListRefreshService) {

   }

  ngOnInit() {
      this.listrefresh.getResultList()
      this.charactersSubscription = this.listrefresh.character$.subscribe((value: Character[])=>{
      console.log('summary subscriber', value);
      this.characters= value;
    });
  }
}
