import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalidadeComponent } from './components/add-modalidade/add-modalidade.component';
import { ModalidadeDetalhesComponent } from './components/modalidade-detalhes/modalidade-detalhes.component';
import { ModalidadeListaComponent } from './components/modalidade-lista/modalidade-lista.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddModalidadeComponent,
    ModalidadeDetalhesComponent,
    ModalidadeListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
