import { ListaComponent } from './lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCadastrosComponent } from './lista-cadastros/lista-cadastros.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
    children: [{ path: 'lista', component: ListaCadastrosComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRoutingModule {}
