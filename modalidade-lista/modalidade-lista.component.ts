import { Component, OnInit } from '@angular/core';
import { Modalidade } from 'src/app/models/modalidade.model';
import { ModalidadeService } from 'src/app/services/modalidade.service';

@Component({
  selector: 'app-modalidade-lista',
  templateUrl: './modalidade-lista.component.html',
  styleUrls: ['./modalidade-lista.component.css']
})
export class ModalidadeListaComponent implements OnInit {

  modalidades?: Modalidade[];
  currentModalidade: Modalidade = {};
  currentIndex = -1;
  mod_nome = '';

  constructor(private modalidadeService: ModalidadeService) { }

  ngOnInit(): void {
    this.mostrarModalidades();
  }

  mostrarModalidades(): void {
    this.modalidadeService.getAll()
      .subscribe({
        next: (data) => {
          this.modalidades = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  atualizarLista(): void {
    this.mostrarModalidades();
    this.currentModalidade = {};
    this.currentIndex = -1;
  }

  setActiveModalidade(modalidade: Modalidade, index: number): void {
    this.currentModalidade = modalidade;
    this.currentIndex = index;
  }

  removerTodasModalidades(): void {
    this.modalidadeService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.atualizarLista();
        },
        error: (e) => console.error(e)
      });
  }

  procurarModalidade(): void {
    this.currentModalidade = {};
    this.currentIndex = -1;

    this.modalidadeService.AcharPorModalidade(this.mod_nome)
      .subscribe({
        next: (data) => {
          this.modalidades = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
