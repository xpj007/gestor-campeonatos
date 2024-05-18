import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/models/atleta.model';
import { AtletaService } from 'src/app/services/atleta.service';

@Component({
  selector: 'app-atleta-lista',
  templateUrl: './atleta-lista.component.html',
  styleUrls: ['./atleta-lista.component.css']
})
export class AtletaListaComponent implements OnInit {

  atletas?: Atleta[];
  currentAtleta: Atleta = {};
  currentIndex = -1;
  at_nome = '';

  constructor(private atletaService: AtletaService) { }

  ngOnInit(): void {
    this.mostrarAtletas();
  }

  mostrarAtletas(): void {
    this.atletaService.getAll()
      .subscribe({
        next: (data) => {
          this.atletas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarLista(): void {
    this.mostrarAtletas();
    this.currentAtleta = {};
    this.currentIndex = -1;
  }

  setActiveAtleta(atleta: Atleta, index: number): void {
    this.currentAtleta = atleta;
    this.currentIndex = index;
  }

  removerTodasAtletas(): void {
    this.atletaService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.atualizarLista();
        },
        error: (e) => console.error(e)
      });
  }

  procurarAtleta(): void {
    this.currentAtleta = {};
    this.currentIndex = -1;

    this.atletaService.AcharPorAtleta(this.at_nome)
      .subscribe({
        next: (data) => {
          this.atletas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}