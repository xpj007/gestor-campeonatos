import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalidadeComponent } from './components/add-modalidade/add-modalidade.component';
import { ModalidadeDetalhesComponent } from './components/modalidade-detalhes/modalidade-detalhes.component';
import { ModalidadeListaComponent } from './components/modalidade-lista/modalidade-lista.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEquipeComponent } from './components/add-equipe/add-equipe.component';
import { AddCampeonatoComponent } from './components/add-campeonato/add-campeonato.component';
import { CampeonatoDetalhesComponent } from './components/campeonato-detalhes/campeonato-detalhes.component';
import { EquipeDetalhesComponent } from './components/equipe-detalhes/equipe-detalhes.component';
import { EquipeListaComponent } from './components/equipe-lista/equipe-lista.component';
import { CampeonatoListaComponent } from './components/campeonato-lista/campeonato-lista.component';
import { AddAtletaComponent } from './components/add-atleta/add-atleta.component';
import { AtletaDetalhesComponent } from './components/atleta-detalhes/atleta-detalhes.component';
import { AtletaListaComponent } from './components/atleta-lista/atleta-lista.component';
import { HomeComponent } from './components/home/home.component';
import { AddElencoComponent } from './components/add-elenco/add-elenco.component';
import { ElencoListaComponent } from './components/elenco-lista/elenco-lista.component';
import { MatTableModule } from '@angular/material/table';
import { AddJogoComponent } from './components/add-jogo/add-jogo.component';
import { JogoDetalhesComponent } from './components/jogo-detalhes/jogo-detalhes.component';
import { JogoListaComponent } from './components/jogo-lista/jogo-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModalidadeComponent,
    ModalidadeDetalhesComponent,
    ModalidadeListaComponent,
    AddEquipeComponent,
    AddCampeonatoComponent,
    CampeonatoDetalhesComponent,
    EquipeDetalhesComponent,
    EquipeListaComponent,
    CampeonatoListaComponent,
    AddAtletaComponent,
    AtletaDetalhesComponent,
    AtletaListaComponent,
    HomeComponent,
    AddElencoComponent,
    ElencoListaComponent,
    AddJogoComponent,
    JogoDetalhesComponent,
    JogoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
