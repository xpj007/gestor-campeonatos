import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/models/equipe.model';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})

export class AddEquipeComponent implements OnInit {

  equipe: Equipe = {
    Equipe_nome: '',
    publicado: false
  };
  submitted = false;

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
  }

  gravarEquipe(): void {
    const data = {
      Equipe_nome: this.equipe.Equipe_nome
    };

    this.equipeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  novaEquipe(): void {
    this.submitted = false;
    this.equipe = {
      Equipe_nome: '',
      publicado: false
    };
  }

}
