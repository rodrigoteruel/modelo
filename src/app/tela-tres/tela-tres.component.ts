
import { Modelo } from './../modelo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() retornamodelo = new EventEmitter();
  tela: number = 1;

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
  
  verifica(){
    let valido: number = 0;
    if (this.modelo.questionum == 0){
      valido = valido + 1;
    }
    if (this.modelo.questiondois == 0){
      valido = valido + 1;
    }
    if (this.modelo.questiontres == 0){
      valido = valido + 1;
    }
    if (this.modelo.questionquatro == 0){
      valido = valido + 1;
    }
    if (valido == 0){
      var element = <HTMLInputElement> document.getElementById("salvar");
      element.disabled = false;
      this.submitted = true;
    }else{
      var element = <HTMLInputElement> document.getElementById("salvar");
      element.disabled = true;
      this.submitted = false;
    }
  }
 
  create(){
    //call server to save
    if (this.submitted == true){
      //envia campos para a tela 4
      this.retornamodelo.emit(this.modelo);
      this.tela = 2;
    }else{
      //não envia campos para a tela 4
    }
    
  }

  primeira(valor: any){
    this.modelo.questionum = this.data[valor].cep;
    this.verifica();
  }

  segunda(valor: any){
    this.modelo.questiondois = this.data[valor].cep;
    this.verifica();
  }

  terceira(valor: any){
    this.modelo.questiontres = this.data[valor].cep;
    this.verifica();
  }

  quarta(valor: any){
    this.modelo.questionquatro = valor;
    this.verifica();
  }

  ngOnInit() {
     
  }
}
