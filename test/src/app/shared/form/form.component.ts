import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  getName(){
    return this.httpClient.get('https://api.genderize.io/?name=nomedaricercare;');
  }

  ngOnInit(): void {
  }

}
