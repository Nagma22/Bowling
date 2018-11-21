import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor() {
   }

  columnDefs = [
    {headerName: 1, width:111},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    {headerName: 2, width:115},
    {headerName: 3, width:115},
    {headerName: 4, width:115},
    {headerName: 5, width:115},
    {headerName: 6, width:115},
    {headerName: 7, width:115},
    {headerName: 8, width:115},
    {headerName: 9, width:115},
    {headerName: 10, width:113},
    {headerName: 11, width:111}
];

  ngOnInit() {
    
  }

}
