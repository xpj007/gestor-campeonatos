import { Component , OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo.model';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogo-lista',
  templateUrl: './jogo-lista.component.html',
  styleUrls: ['./jogo-lista.component.css']
})
export class JogoListaComponent implements OnInit {

  jogos?: Jogo[];
  currentJogo: Jogo = {};
  currentIndex = -1;
  jogo_camp_nome = '';

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.mostrarJogos();
  }

  mostrarJogos(): void {
    this.jogoService.getAll()
      .subscribe({
        next: (data) => {
          this.jogos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarLista(): void {
    this.mostrarJogos();
    this.currentJogo = {};
    this.currentIndex = -1;
  }

  setActiveJogo(jogo: Jogo, index: number): void {
    this.currentJogo = jogo;
    this.currentIndex = index;
  }

  removerTodosJogos(): void {
    this.jogoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.atualizarLista();
        },
        error: (e) => console.error(e)
      });
  }

  procurarJogo(): void {
    this.currentJogo = {};
    this.currentIndex = -1;

    this.jogoService.AcharPorJogo(this.jogo_camp_nome)
      .subscribe({
        next: (data) => {
          this.jogos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}