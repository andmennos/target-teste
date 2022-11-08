import { environment } from '../../../environments/environment';
import { Cadastro } from '../home/cadastro-form/cadastro.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const API: string = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
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
}
