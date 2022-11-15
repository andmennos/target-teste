import { Cadastro } from './../home/cadastro-form/models/cadastro.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

const API: string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  cadastro!: Cadastro;
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  mensagem(texto: string): void {
    this.snackBar.open(texto, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  cria(cadastro: Cadastro): Observable<Cadastro> {
    return this.httpClient.post<Cadastro>(API, cadastro);
  }

  verCadastros(): Observable<Cadastro[]> {
    return this.httpClient.get<Cadastro[]>(API);
  }

  atualizar(cadastro: Cadastro): Observable<Cadastro> {
    return this.httpClient.put(API, cadastro);
  }

  excluir(id: any) {
    return this.httpClient.delete(API + id);
  }
}
