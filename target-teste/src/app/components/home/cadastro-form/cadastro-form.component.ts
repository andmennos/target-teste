import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../shared/service.service';
import { Cadastro } from './cadastro.model';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent implements OnInit {
  cadastro: Cadastro = {
    nome: '',
    tel: '',
  };

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {}

  criaCadastro(): void {
    this.service.cria(this.cadastro).subscribe(() => {
      this.service.mensagem('Salvo com sucesso');
      this.router.navigate(['lista']);
    });
  }

  limpar(): void {
    this.router.navigate(['']);
  }
}
