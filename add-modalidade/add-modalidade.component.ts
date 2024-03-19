import { Component, OnInit } from '@angular/core';
import { Modalidade } from 'src/app/models/modalidade.model';
import { ModalidadeService } from 'src/app/services/modalidade.service';

@Component({
  selector: 'app-add-modalidade',
  templateUrl: './add-modalidade.component.html',
  styleUrls: ['./add-modalidade.component.css']
})

export class AddModalidadeComponent implements OnInit {

  modalidade: Modalidade = {
    mod_nome: '',
    mod_descri: '',
    mod_qtd_time: 0 ,
    publicado: false
  };
  submitted = false;

  constructor(private modalidadeService: ModalidadeService) { }

  ngOnInit(): void {
  }

  gravarModalidade(): void {
    const data = {
      mod_nome: this.modalidade.mod_nome,
      mod_descri: this.modalidade.mod_descri,
      mod_qtd_time: this.modalidade.mod_qtd_time
    };

    this.modalidadeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  novaModalidade(): void {
    this.submitted = false;
    this.modalidade = {
      mod_nome: '',
      mod_descri: '',
      mod_qtd_time: 0 ,
      publicado: false
    };
  }

}
