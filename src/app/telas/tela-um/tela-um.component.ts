import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-um',
  templateUrl: './tela-um.component.html',
  styleUrls: ['./tela-um.component.css']
})
export class TelaUmComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  aceite(){
    //verifica se o checkbox de aceite foi marcado para habilitar ou não o botão para prosseguir
    var element = <HTMLInputElement> document.getElementById("aceitou");
    var isChecked = element.checked;

    if (isChecked){
      var element = <HTMLInputElement> document.getElementById("btnok");
      element.disabled = false;
    }else{
      var element = <HTMLInputElement> document.getElementById("btnok");
      element.disabled = true;
    }    
  }

  limparbox(){
    var element = <HTMLInputElement> document.getElementById("aceitou");
    element.checked = false;
  }
}
