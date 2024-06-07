import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDetalhesComponent } from './jogo-detalhes.component';

describe('JogoDetalhesComponent', () => {
  let component: JogoDetalhesComponent;
  let fixture: ComponentFixture<JogoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
