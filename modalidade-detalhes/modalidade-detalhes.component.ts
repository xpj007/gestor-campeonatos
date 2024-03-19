import { Component, Input, OnInit } from '@angular/core';
import { ModalidadeService } from 'src/app/services/modalidade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Modalidade } from 'src/app/models/modalidade.model';

@Component({
  selector: 'app-modalidade-detalhes',
  templateUrl: './modalidade-detalhes.component.html',
  styleUrls: ['./modalidade-detalhes.component.css']
})
export class ModalidadeDetalhesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentModalidade: Modalidade = {
    mod_nome: '',
    mod_descri: '',
    mod_qtd_time: 0,
    publicado: false
  };
  
  message = '';

  constructor(
    private modalidadeService: ModalidadeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getModalidade(this.route.snapshot.params["id"]);
    }
  }

  getModalidade(id: string): void {
    this.modalidadeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentModalidade = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarPublicado(status: boolean): void {
    const data = {
      mod_nome: this.currentModalidade.mod_nome,
      mod_descri: this.currentModalidade.mod_descri,
      mod_qtd_time: this.currentModalidade.mod_qtd_time,
      publicado: status
    };

    this.message = '';

    this.modalidadeService.update(this.currentModalidade.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentModalidade.publicado = status;
          this.message = res.message ? res.message : 'O Status foi atualizado com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  atualizarModalidade(): void {
    this.message = '';

    this.modalidadeService.update(this.currentModalidade.id, this.currentModalidade)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Essa Modalidade foi atualizada com Sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deletarModalidade(): void {
    this.modalidadeService.delete(this.currentModalidade.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/modalidades']);
        },
        error: (e) => console.error(e)
      });
  }

}
