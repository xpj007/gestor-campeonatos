import { Component, Input, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.service';
import { Jogo } from 'src/app/models/jogo.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-jogo-detalhes',
  templateUrl: './jogo-detalhes.component.html',
  styleUrls: ['./jogo-detalhes.component.css']
})
export class JogoDetalhesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentJogo: Jogo = {
    jogo_camp_nome: '',
    jogo_cs_nome: '',
    jogo_cs_placar: 0,
    jogo_fr_nome: '',
    jogo_fr_placar: 0,
    jogo_data: new Date('2024-06-01T10:00:00.000'),
    jogo_local : '',    
    publicado: false
  };
  
  message = '';

  constructor(
    private jogoService: JogoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getJogo(this.route.snapshot.params["id"]);
    }
  }

  getJogo(id: string): void {
    this.jogoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentJogo = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarPublicado(status: boolean): void {
    const data = {
      jogo_camp_nome: this.currentJogo.jogo_camp_nome,
      jogo_cs_nome: this.currentJogo.jogo_cs_nome,
      jogo_cs_placar: this.currentJogo.jogo_cs_placar,
      jogo_fr_nome: this.currentJogo.jogo_fr_nome,
      jogo_fr_placar: this.currentJogo.jogo_fr_placar,
      jogo_data: this.currentJogo.jogo_data,
      jogo_local: this.currentJogo.jogo_local,
      publicado: status
    };

    this.message = '';

    this.jogoService.update(this.currentJogo.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentJogo.publicado = status;
          this.message = res.message ? res.message : 'O Status foi atualizado com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  atualizarJogo(): void {
    this.message = '';

    this.jogoService.update(this.currentJogo.id, this.currentJogo)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Essa Partida foi atualizada com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deletarJogo(): void {
    this.jogoService.delete(this.currentJogo.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/jogos']);
        },
        error: (e) => console.error(e)
      });
  }


}