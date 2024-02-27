import { Component } from '@angular/core';
import { Pedido } from '../../model/Pedido';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

pedido:Pedido;
pedidosArray:Pedido[]=[];
tablaVisible:boolean=true;

constructor(){
    this.pedido=new Pedido();
  }

  guardar():void{
    this.pedidosArray.push(this.pedido);
    this.pedido=new Pedido();


  }

  verPedidos():void{
    this.tablaVisible=this.tablaVisible;

  }


}
