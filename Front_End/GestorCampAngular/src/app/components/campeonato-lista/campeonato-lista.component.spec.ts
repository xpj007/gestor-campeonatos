import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonatoListaComponent } from './campeonato-lista.component';

describe('CampeonatoListaComponent', () => {
  let component: CampeonatoListaComponent;
  let fixture: ComponentFixture<CampeonatoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonatoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonatoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
