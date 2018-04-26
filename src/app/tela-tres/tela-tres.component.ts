import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tela-tres',
  templateUrl: './tela-tres.component.html',
  styleUrls: ['./tela-tres.component.css']
})
export class TelaTresComponent implements OnInit {
  private apiUrl = 'https://viacep.com.br/ws/MG/Uberaba/barao/json/';
  data: any = {};

  constructor(private http: Http){
    console.log('GET data!');
    this.getContacts();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getContacts(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
 
  ngOnInit() {
  }

}
