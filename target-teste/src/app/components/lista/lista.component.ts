import { ServiceService } from './../shared/service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  displayedColumns = ['id', 'nome', 'tel'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.verCadastros().subscribe((retorno) => {
      this.dataSource = new MatTableDataSource(retorno);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log('Retorno obtido: ', retorno);
    });
  }

  busca($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  excluir() {}
}
