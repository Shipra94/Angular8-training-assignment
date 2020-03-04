import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterSortComponent } from './components/character-sort/character-sort.component';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatedAtPipe } from './pipes/created-at.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSearchComponent,
    CharacterListComponent,
    CharacterSortComponent,
    CharacterFilterComponent,
    CreatedAtPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
