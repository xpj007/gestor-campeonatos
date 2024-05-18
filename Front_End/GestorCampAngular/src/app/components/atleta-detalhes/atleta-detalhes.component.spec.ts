import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaDetalhesComponent } from './atleta-detalhes.component';

describe('AtletaDetalhesComponent', () => {
  let component: AtletaDetalhesComponent;
  let fixture: ComponentFixture<AtletaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtletaDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtletaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
