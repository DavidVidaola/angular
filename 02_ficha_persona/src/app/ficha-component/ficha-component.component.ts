import { Component } from '@angular/core';
import { Pesrona } from '../model/Persona';

@Component({
  selector: 'app-ficha-component',
  templateUrl: './ficha-component.component.html',
  styleUrl: './ficha-component.component.css'
})
export class FichaComponentComponent {

persona:Pesrona;
  resultado:string="";
  constructor(){
    this.persona=new Pesrona();
  }
  grabar():void{
    this.resultado="Te llamas "+this.persona.nombre+" tienes "+this.persona.edad+" años";this.resultado+ "y eres del departamento "+this.persona.departamento;
  }
}
