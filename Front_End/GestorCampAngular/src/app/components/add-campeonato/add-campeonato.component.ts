import { Component, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/models/campeonato.model';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { ModalidadeService } from 'src/app/services/modalidade.service';

@Component({
  selector: 'app-add-campeonato',
  templateUrl: './add-campeonato.component.html',
  styleUrls: ['./add-campeonato.component.css']
})
export class AddCampeonatoComponent implements OnInit {

  campeonato: Campeonato = {
    camp_nome: '',
    camp_n_equip: 0 ,
    camp_modalidade: '',
    publicado: false
  };
  submitted = false;
  modalidade: any =[];

  constructor(private campeonatoService: CampeonatoService,
              private modalidadeService: ModalidadeService
  ) { }

  ngOnInit(): void {
    this.modalidadeService.getAll().subscribe(data => this.modalidade = data);
  }

  gravarCampeonato(): void {
    const data = {
      camp_nome: this.campeonato.camp_nome,
      camp_n_equip: this.campeonato.camp_n_equip,
      camp_modalidade: this.campeonato.camp_modalidade
    };

    this.campeonatoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  novoCampeonato(): void {
    this.submitted = false;
    this.campeonato = {
      camp_nome: '',
      camp_n_equip: 0 ,
      camp_modalidade: '',
      publicado: false
    };
  }

}


