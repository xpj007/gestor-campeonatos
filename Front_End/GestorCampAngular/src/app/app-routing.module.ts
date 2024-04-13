import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalidadeListaComponent } from './components/modalidade-lista/modalidade-lista.component';
import { ModalidadeDetalhesComponent } from './components/modalidade-detalhes/modalidade-detalhes.component';
import { AddModalidadeComponent } from './components/add-modalidade/add-modalidade.component';
import { CampeonatoListaComponent } from './components/campeonato-lista/campeonato-lista.component';
import { CampeonatoDetalhesComponent } from './components/campeonato-detalhes/campeonato-detalhes.component';
import { AddCampeonatoComponent } from './components/add-campeonato/add-campeonato.component';
import { EquipeListaComponent } from './components/equipe-lista/equipe-lista.component';
import { EquipeDetalhesComponent } from './components/equipe-detalhes/equipe-detalhes.component';
import { AddEquipeComponent } from './components/add-equipe/add-equipe.component';


const routes: Routes = [
{ path: '', redirectTo: 'modalidades', pathMatch: 'full' },
{ path: 'modalidades', component: ModalidadeListaComponent },
{ path: 'modalidades/:id', component: ModalidadeDetalhesComponent },
{ path: 'add', component: AddModalidadeComponent },
{ path: 'campeonatos', component: CampeonatoListaComponent },
{ path: 'campeonatos/:id', component: CampeonatoDetalhesComponent },
{ path: 'addCamp', component: AddCampeonatoComponent },
{ path: 'equipes', component: EquipeListaComponent },
{ path: 'equipes/:id', component: EquipeDetalhesComponent },
{ path: 'addEquipe', component: AddEquipeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
