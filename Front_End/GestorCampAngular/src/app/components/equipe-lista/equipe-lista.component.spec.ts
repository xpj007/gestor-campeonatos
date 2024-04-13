import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeListaComponent } from './equipe-lista.component';

describe('EquipeListaComponent', () => {
  let component: EquipeListaComponent;
  let fixture: ComponentFixture<EquipeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
