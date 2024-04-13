import { Component, Input, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/services/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/models/equipe.model';

@Component({
  selector: 'app-equipe-detalhes',
  templateUrl: './equipe-detalhes.component.html',
  styleUrls: ['./equipe-detalhes.component.css']
})
export class EquipeDetalhesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEquipe: Equipe = {
    Equipe_nome: '',
    publicado: false
  };
  
  message = '';

  constructor(
    private equipeService: EquipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEquipe(this.route.snapshot.params["id"]);
    }
  }

  getEquipe(id: string): void {
    this.equipeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEquipe = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarPublicado(status: boolean): void {
    const data = {
      Equipe_nome: this.currentEquipe.Equipe_nome,
      publicado: status
    };

    this.message = '';

    this.equipeService.update(this.currentEquipe.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentEquipe.publicado = status;
          this.message = res.message ? res.message : 'O Status foi atualizado com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  atualizarEquipe(): void {
    this.message = '';

    this.equipeService.update(this.currentEquipe.id, this.currentEquipe)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Essa Equipe foi atualizada com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deletarEquipe(): void {
    this.equipeService.delete(this.currentEquipe.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/equipes']);
        },
        error: (e) => console.error(e)
      });
  }

}
