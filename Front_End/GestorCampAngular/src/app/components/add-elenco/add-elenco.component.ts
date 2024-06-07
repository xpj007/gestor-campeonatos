import { Component, OnInit } from '@angular/core';
import { Elenco } from 'src/app/models/elenco.model';
import { ElencoService } from 'src/app/services/elenco.service';
import { AtletaService } from 'src/app/services/atleta.service';
import { EquipeService } from 'src/app/services/equipe.service';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { Atleta, AtletaInt ,AtletaConsul} from 'src/app/models/atleta.model';

@Component({
  selector: 'app-add-elenco',
  templateUrl: './add-elenco.component.html',
  styleUrls: ['./add-elenco.component.css'],
  
})
export class AddElencoComponent implements OnInit {

  elenco: Elenco = {
    el_camp_nome: '',
    el_equipe_nome: '',
    el_at_nome: '',
    el_at_dnasc: new Date('2024-04-23T10:00:00.000'),
    el_at_nota: 0
  };

  public itensDaTabela: Atleta[] = [];
  submitted = false;
  el_nota = 0;
  qtd = 1;
  equipe: any=[];
  consulta_at:  any=[];
  campeonato: any=[];
  
  displayedColumns: string[] = ['at_nome', 'at_dnasc', 'at_nota','at_posicao'];
  dataSource = this.consulta_at;

  constructor(private elencoService: ElencoService,
    private atletaService: AtletaService,
    private equipeService: EquipeService,
    private campeonatoService: CampeonatoService, 
) { }

  ngOnInit(): void {
    this.equipeService.getAll().subscribe(data => this.equipe = data);
    this.campeonatoService.getAll().subscribe(data => this.campeonato = data);
    this.itensDaTabela = [];
  }

  gerarElenco(): void{
    this.consulta_at = this.atletaService.getCon().subscribe((res) => {
      this.itensDaTabela = this.itensDaTabela.concat(res.items);
    })
    this.dataSource =this.consulta_at;
    
  }

}
