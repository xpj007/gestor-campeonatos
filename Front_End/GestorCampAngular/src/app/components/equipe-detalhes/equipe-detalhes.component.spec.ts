import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeDetalhesComponent } from './equipe-detalhes.component';

describe('EquipeDetalhesComponent', () => {
  let component: EquipeDetalhesComponent;
  let fixture: ComponentFixture<EquipeDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
