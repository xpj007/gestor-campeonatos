import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/models/equipe.model';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipe-lista',
  templateUrl: './equipe-lista.component.html',
  styleUrls: ['./equipe-lista.component.css']
})
export class EquipeListaComponent implements OnInit {

  equipes?: Equipe[];
  currentEquipe: Equipe = {};
  currentIndex = -1;
  Equipe_nome = '';

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.mostrarEquipes();
  }

  mostrarEquipes(): void {
    this.equipeService.getAll()
      .subscribe({
        next: (data) => {
          this.equipes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarLista(): void {
    this.mostrarEquipes();
    this.currentEquipe = {};
    this.currentIndex = -1;
  }

  setActiveEquipe(equipe: Equipe, index: number): void {
    this.currentEquipe = equipe;
    this.currentIndex = index;
  }

  removerTodasEquipes(): void {
    this.equipeService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.atualizarLista();
        },
        error: (e) => console.error(e)
      });
  }

  procurarEquipe(): void {
    this.currentEquipe = {};
    this.currentIndex = -1;

    this.equipeService.AcharPorEquipe(this.Equipe_nome)
      .subscribe({
        next: (data) => {
          this.equipes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}