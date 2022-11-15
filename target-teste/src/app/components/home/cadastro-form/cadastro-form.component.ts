import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../shared/service.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
})
export class CadastroFormComponent {
  imaskTel = {
    mask: '+ {55} (00) 0 0000-0000',
  };

  constructor(
    private _formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {}

  parts = this._formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    tel: [
      '',
      [Validators.required, Validators.minLength(20), Validators.maxLength(21)],
    ],
  });

  criaCadastro(): void {
    this.service.cria(this.parts.value).subscribe(() => {
      this.service.mensagem('Salvo com sucesso');
      this.router.navigate(['lista']);
    });
  }

  limpar(): void {
    this.parts.reset();
  }

  verLista(): void {
    this.router.navigate(['lista']);
  }

  getErrorMessage() {
    if (this.parts.get('nome')?.hasError('required')) {
      return 'Nome Inválido';
    }
    return this.parts.hasError('nome')
      ? ''
      : 'Deve conter no mínimo 2 caracteres';
  }

  getErrorMessageTel() {
    if (this.parts.get('tel')?.hasError('required')) {
      return 'Deve inserir tel com DDD';
    }
    return this.parts.hasError('tel') ? '' : 'Tel inválido';
  }
}
