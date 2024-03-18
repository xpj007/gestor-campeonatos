import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeDetalhesComponent } from './modalidade-detalhes.component';

describe('ModalidadeDetalhesComponent', () => {
  let component: ModalidadeDetalhesComponent;
  let fixture: ComponentFixture<ModalidadeDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
