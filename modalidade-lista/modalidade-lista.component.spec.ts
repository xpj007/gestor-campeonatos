import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeListaComponent } from './modalidade-lista.component';

describe('ModalidadeListaComponent', () => {
  let component: ModalidadeListaComponent;
  let fixture: ComponentFixture<ModalidadeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
