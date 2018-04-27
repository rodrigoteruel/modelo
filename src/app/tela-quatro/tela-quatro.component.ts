import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tela-quatro',
  templateUrl: './tela-quatro.component.html',
  styleUrls: ['./tela-quatro.component.css']
})
export class TelaQuatroComponent implements OnInit {
  @Input() pegamodelo

  constructor() { }

  ngOnInit() {
  }

}
