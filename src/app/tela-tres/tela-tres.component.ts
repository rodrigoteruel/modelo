
import { Modelo } from './../modelo';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';




@Component({
  selector: 'app-tela-tres',
  templateUrl: './tela-tres.component.html',
  styleUrls: ['./tela-tres.component.css']
})
export class TelaTresComponent implements OnInit {
  modelo: Modelo = new Modelo();
  submitted: boolean = false; //check if the form is submitted

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
 
 

  create(){
    //call server to save
    console.log("entrou no create");
    this.submitted = true;
    
  }

  primeira(valor: any){
    this.modelo.questionum = this.data[valor].cep;
  }

  segunda(valor: any){
    this.modelo.questiondois = this.data[valor].cep;
  }

  terceira(valor: any){
    this.modelo.questiontres = this.data[valor].cep;
  }

  quarta(){

  }


  ngOnInit() {
     
  }

 

 

 

}
