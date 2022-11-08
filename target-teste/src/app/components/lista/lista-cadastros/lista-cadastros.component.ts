import { Cadastro } from '../../home/cadastro-form/cadastro.model';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../shared/service.service';

@Component({
  selector: 'app-lista-cadastros',
  templateUrl: './lista-cadastros.component.html',
  styleUrls: ['./lista-cadastros.component.scss'],
})
export class ListaCadastrosComponent implements OnInit {
  cadastros!: Cadastro[];
  displayedColumns = ['id', 'nome', 'tel'];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.verCadastros().subscribe((cadastros) => {
      this.cadastros = cadastros;
    });
  }
}
