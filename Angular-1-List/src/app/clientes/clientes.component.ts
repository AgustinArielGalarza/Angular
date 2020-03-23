import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  //se define el atributo y se inyecta a la vez.
  constructor(private clientesService: ClienteService) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(
      clientes => this.clientes = clientes
    )
  }

}
