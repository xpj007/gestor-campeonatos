import { Component, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/models/campeonato.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-campeonato-lista',
  templateUrl: './campeonato-lista.component.html',
  styleUrls: ['./campeonato-lista.component.css']
})
export class CampeonatoListaComponent implements OnInit {

  campeonatos?: Campeonato[];
  currentCampeonato: Campeonato = {};
  currentIndex = -1;
  camp_nome = '';

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.mostrarCampeonatos();
  }

  mostrarCampeonatos(): void {
    this.campeonatoService.getAll()
      .subscribe({
        next: (data) => {
          this.campeonatos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarLista(): void {
    this.mostrarCampeonatos();
    this.currentCampeonato = {};
    this.currentIndex = -1;
  }

  setActiveCampeonato(campeonato: Campeonato, index: number): void {
    this.currentCampeonato = campeonato;
    this.currentIndex = index;
  }

  removerTodasCampeonatos(): void {
    this.campeonatoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.atualizarLista();
        },
        error: (e) => console.error(e)
      });
  }

  procurarCampeonato(): void {
    this.currentCampeonato = {};
    this.currentIndex = -1;

    this.campeonatoService.AcharPorCampeonato(this.camp_nome)
      .subscribe({
        next: (data) => {
          this.campeonatos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
