import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalidadeListaComponent } from './components/modalidade-lista/modalidade-lista.component';
import { ModalidadeDetalhesComponent } from './components/modalidade-detalhes/modalidade-detalhes.component';
import { AddModalidadeComponent } from './components/add-modalidade/add-modalidade.component';

const routes: Routes = [
{ path: '', redirectTo: 'modalidades', pathMatch: 'full' },
{ path: 'modalidades', component: ModalidadeListaComponent },
{ path: 'modalidades/:id', component: ModalidadeDetalhesComponent },
{ path: 'add', component: AddModalidadeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
