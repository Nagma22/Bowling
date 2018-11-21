import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../Player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

@Input()  players : Array<Player>;

  constructor( ) {
    this.players = [];
   }

   addRow(num)
   {
      let player = new Player(num);
      this.players.push(player);
   }

  ngOnInit() {
    
  }
  
}
