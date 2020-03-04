import { Component, OnInit } from '@angular/core';
import { ListRefreshService } from 'src/app/services/list-refresh.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {
  filterLabels = [];
  constructor(private characterService : CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacterList().subscribe((value) =>{
      console.log(value); 
      this.filterLabels["genders"] = value.map(x => x.gender).filter((v, i, self) => {
        return self.indexOf(v) == i;
      });
      this.filterLabels["gendersChecked"]=[...this.filterLabels["genders"]];
      this.filterLabels["species"] = value.map(x => x.species).filter((v,i,self)=>{
        return self.indexOf(v) == i;
      });
      this.filterLabels["speciesChecked"] = [...this.filterLabels["species"]];
      this.filterLabels["origins"] = value.map(x => x.origin.name).filter((v,i,self)=>{
        return self.indexOf(v) == i;
      });
      this.filterLabels["originChecked"] = [...this.filterLabels["origins"]];
    });
    console.log(this.filterLabels);
  }

}
