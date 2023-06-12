import { ExcluirPensamentoComponent } from './pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './pensamentos/criar-pensamento/criar-pensamento.component';
import { EditarPensamentoComponent } from './pensamentos/editar-pensamento/editar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },

  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
