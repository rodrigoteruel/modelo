import { Component, OnInit } from '@angular/core';
import { Modelo } from './modelo';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html',
  styleUrls: ['./telas.component.css']
})

export class TelasComponent implements OnInit {
  modelo: Modelo;
  alterna: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  processaModelo(evento){
    this.modelo = evento;
    this.alterna = !this.alterna;
  }
}
