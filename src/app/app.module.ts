import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([PlayerListComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
