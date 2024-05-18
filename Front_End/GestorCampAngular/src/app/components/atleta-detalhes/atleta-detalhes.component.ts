import { Component, Input, OnInit } from '@angular/core';
import { AtletaService } from 'src/app/services/atleta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta.model';

@Component({
  selector: 'app-atleta-detalhes',
  templateUrl: './atleta-detalhes.component.html',
  styleUrls: ['./atleta-detalhes.component.css']
})
export class AtletaDetalhesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentAtleta: Atleta = {
    at_nome: '',
    at_dnasc: new Date('2024-04-23T10:00:00.000'),
    at_modalidade : '',
    at_nota: 0,
    at_posicao: '',    
    publicado: false
  };
  
  message = '';

  constructor(
    private atletaService: AtletaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAtleta(this.route.snapshot.params["id"]);
    }
  }

  getAtleta(id: string): void {
    this.atletaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAtleta = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarPublicado(status: boolean): void {
    const data = {
      at_nome: this.currentAtleta.at_nome,
      at_dnasc: this.currentAtleta.at_dnasc,
      at_modalidade: this.currentAtleta.at_modalidade,
      at_nota: this.currentAtleta.at_nota,
      at_posicao: this.currentAtleta.at_posicao,
      publicado: status
    };

    this.message = '';

    this.atletaService.update(this.currentAtleta.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentAtleta.publicado = status;
          this.message = res.message ? res.message : 'O Status foi atualizado com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  atualizarAtleta(): void {
    this.message = '';

    this.atletaService.update(this.currentAtleta.id, this.currentAtleta)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Esse Atleta foi atualizado com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deletarAtleta(): void {
    this.atletaService.delete(this.currentAtleta.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/atletas']);
        },
        error: (e) => console.error(e)
      });
  }


}
