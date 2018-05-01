import { Component, OnInit } from '@angular/core';
import { Modelo } from './modelo';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html',
  styleUrls: ['./telas.component.css']
})
export class TelasComponent implements OnInit {
  modelo: Modelo;
  constructor() { }

  ngOnInit() {
  }

  processaModelo(evento){
    this.modelo = evento;
  }

}
