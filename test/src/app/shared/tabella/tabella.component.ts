import { Component, Input, OnInit } from '@angular/core';
import { Name } from 'src/app/models/names';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {
 names:Name[]=[{
   name: 'Davide',
   gender: 'male',
   probability: 10,
   count : 1,
 }];

  constructor() { }

  ngOnInit(): void {
  }

}
