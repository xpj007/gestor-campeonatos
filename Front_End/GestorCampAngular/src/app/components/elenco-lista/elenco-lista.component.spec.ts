import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoListaComponent } from './elenco-lista.component';

describe('ElencoListaComponent', () => {
  let component: ElencoListaComponent;
  let fixture: ComponentFixture<ElencoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
