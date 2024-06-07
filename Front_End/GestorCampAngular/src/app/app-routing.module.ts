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
import { AddAtletaComponent } from './components/add-atleta/add-atleta.component';
import { AtletaDetalhesComponent } from './components/atleta-detalhes/atleta-detalhes.component';
import { AtletaListaComponent } from './components/atleta-lista/atleta-lista.component';
import { HomeComponent } from './components/home/home.component';
import { AddElencoComponent } from './components/add-elenco/add-elenco.component';
import { ElencoListaComponent } from './components/elenco-lista/elenco-lista.component';
import { AddJogoComponent } from './components/add-jogo/add-jogo.component';
import { JogoListaComponent } from './components/jogo-lista/jogo-lista.component';
import { JogoDetalhesComponent } from './components/jogo-detalhes/jogo-detalhes.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'modalidades', component: ModalidadeListaComponent },
{ path: 'modalidades/:id', component: ModalidadeDetalhesComponent },
{ path: 'add', component: AddModalidadeComponent },
{ path: 'campeonatos', component: CampeonatoListaComponent },
{ path: 'campeonatos/:id', component: CampeonatoDetalhesComponent },
{ path: 'addCamp', component: AddCampeonatoComponent },
{ path: 'equipes', component: EquipeListaComponent },
{ path: 'equipes/:id', component: EquipeDetalhesComponent },
{ path: 'addEquipe', component: AddEquipeComponent },
{ path: 'atletas', component: AtletaListaComponent },
{ path: 'atletas/:id', component: AtletaDetalhesComponent },
{ path: 'addAtleta', component: AddAtletaComponent },
{ path: 'addElenco', component: AddElencoComponent },
{ path: 'elencos', component:ElencoListaComponent },
{ path: 'addJogo', component: AddJogoComponent },
{ path: 'jogos', component:JogoListaComponent },
{ path: 'jogos/:id', component: JogoDetalhesComponent },
{ path: 'home', component: HomeComponent },
{ path: 'home/add', component: AddModalidadeComponent },
{ path: 'home/modalidades', component: ModalidadeListaComponent },
{ path: 'home/addCamp', component: AddCampeonatoComponent },
{ path: 'home/campeonatos', component:CampeonatoListaComponent },
{ path: 'home/addEquipe', component: AddEquipeComponent },
{ path: 'home/equipes', component:EquipeListaComponent },
{ path: 'home/addAtleta', component: AddAtletaComponent },
{ path: 'home/atletas', component:AtletaListaComponent },
{ path: 'home/addElenco', component: AddElencoComponent },
{ path: 'home/elencos', component:ElencoListaComponent },
{ path: 'home/addJogo', component: AddJogoComponent },
{ path: 'home/jogos', component:JogoListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
