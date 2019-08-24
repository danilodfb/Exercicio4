import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  constructor() { }

  calcular(num1: string, num2:string, operacao: string){
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      alert("Só é permitidos numeros");
      return;
    }

    
    switch(operacao){
      case "+":
        alert(parseFloat(num1)+parseFloat(num2));
        break;
      case "-":
        alert(parseFloat(num1)-parseFloat(num2));
        break;
      case "*":
        alert(parseFloat(num1)*parseFloat(num2));
        break;
      case "/":
        alert(parseFloat(num1)/parseFloat(num2));

    }
  }
  

  ngOnInit() {
    
  }

}
