import { Component, Input, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Campeonato } from 'src/app/models/campeonato.model';

@Component({
  selector: 'app-campeonato-detalhes',
  templateUrl: './campeonato-detalhes.component.html',
  styleUrls: ['./campeonato-detalhes.component.css']
})
export class CampeonatoDetalhesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCampeonato: Campeonato = {
    camp_nome: '',
    camp_n_equip: 0,
    camp_modalidade : '',
    publicado: false
  };
  
  message = '';

  constructor(
    private campeonatoService: CampeonatoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCampeonato(this.route.snapshot.params["id"]);
    }
  }

  getCampeonato(id: string): void {
    this.campeonatoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCampeonato = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarPublicado(status: boolean): void {
    const data = {
      camp_nome: this.currentCampeonato.camp_nome,
      camp_n_equip: this.currentCampeonato.camp_n_equip,
      camp_modalidade: this.currentCampeonato.camp_modalidade,
      publicado: status
    };

    this.message = '';

    this.campeonatoService.update(this.currentCampeonato.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentCampeonato.publicado = status;
          this.message = res.message ? res.message : 'O Status foi atualizado com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  atualizarCampeonato(): void {
    this.message = '';

    this.campeonatoService.update(this.currentCampeonato.id, this.currentCampeonato)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Esse Campeonato foi atualizado com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deletarCampeonato(): void {
    this.campeonatoService.delete(this.currentCampeonato.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/campeonatos']);
        },
        error: (e) => console.error(e)
      });
  }


}
