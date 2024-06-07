import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo.model';
import { JogoService } from 'src/app/services/jogo.service';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-add-jogo',
  templateUrl: './add-jogo.component.html',
  styleUrls: ['./add-jogo.component.css']
})
export class AddJogoComponent implements OnInit {

  jogo: Jogo = {
    jogo_camp_nome: '',
    jogo_cs_nome: '',
    jogo_cs_placar: 0,
    jogo_fr_nome: '',
    jogo_fr_placar: 0,
    jogo_data: new Date('2024-06-01T10:00:00.000'),
    jogo_local : '',    
    publicado: false
  };
  submitted = false;
  equipeA: any =[];
  equipeB: any =[];
  campeonato: any=[];

  constructor(private jogoService: JogoService,
              private equipeService: EquipeService,
              private campeonatoService: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.equipeService.getAll().subscribe(data => this.equipeA = data);
    this.equipeService.getAll().subscribe(data => this.equipeB = data);
    this.campeonatoService.getAll().subscribe(data => this.campeonato = data);
  }

  gravarJogo(): void {
    const data = {
      jogo_camp_nome: this.jogo.jogo_camp_nome,
      jogo_cs_nome: this.jogo.jogo_cs_nome,
      jogo_cs_placar: this.jogo.jogo_cs_placar,
      jogo_fr_nome: this.jogo.jogo_fr_nome,
      jogo_fr_placar: this.jogo.jogo_fr_placar,
      jogo_data: this.jogo.jogo_data,
      jogo_local: this.jogo.jogo_local
    };

    this.jogoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  novoJogo(): void {
    this.submitted = false;
    this.jogo = {
    jogo_camp_nome: '',
    jogo_cs_nome: '',
    jogo_cs_placar: 0,
    jogo_fr_nome: '',
    jogo_fr_placar: 0,
    jogo_data: new Date('2024-06-01T10:00:00.000'),
    jogo_local : '',    
    publicado: false
    };
  }

}
