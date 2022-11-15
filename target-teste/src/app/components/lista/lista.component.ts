import { Router } from '@angular/router';
import { ServiceService } from './../shared/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Cadastro } from '../home/cadastro-form/models/cadastro.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  cadastroSelecionado!: Cadastro;
  displayedColumns = ['id', 'nome', 'tel', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.verCadastros().subscribe((retorno) => {
      this.dataSource = new MatTableDataSource(retorno);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  busca($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  voltar() {
    this.router.navigate(['home']);
  }

  excluir(id: string) {
    this.service.excluir('/' + id).subscribe();
    this.service.mensagem('Deletado com sucesso');
    this.router.navigate(['']);
  }
}
