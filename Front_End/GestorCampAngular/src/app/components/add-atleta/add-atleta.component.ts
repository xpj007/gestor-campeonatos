import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/models/atleta.model';
import { AtletaService } from 'src/app/services/atleta.service';
import { ModalidadeService } from 'src/app/services/modalidade.service';

@Component({
  selector: 'app-add-atleta',
  templateUrl: './add-atleta.component.html',
  styleUrls: ['./add-atleta.component.css']
})
export class AddAtletaComponent implements OnInit {

  atleta: Atleta = {
    at_nome: '',
    at_dnasc: new Date('2024-04-23T10:00:00.000'),
    at_modalidade : '',
    at_nota: 0,
    at_posicao: '',    
    publicado: false
  };
  submitted = false;
  modalidade: any =[];

  constructor(private atletaService: AtletaService,
              private modalidadeService: ModalidadeService
  ) { }

  ngOnInit(): void {
    this.modalidadeService.getAll().subscribe(data => this.modalidade = data);
  }

  gravarAtleta(): void {
    const data = {
      at_nome: this.atleta.at_nome,
      at_dnasc: this.atleta.at_dnasc,
      at_modalidade: this.atleta.at_modalidade,
      at_nota: this.atleta.at_nota,
      at_posicao: this.atleta.at_posicao
    };

    this.atletaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  novoAtleta(): void {
    this.submitted = false;
    this.atleta = {
      at_nome: '',
      at_dnasc: new Date('2024-04-23T10:00:00.000'),
      at_modalidade : '',
      at_nota: 0,
      at_posicao: '',    
      publicado: false
    };
  }

}

