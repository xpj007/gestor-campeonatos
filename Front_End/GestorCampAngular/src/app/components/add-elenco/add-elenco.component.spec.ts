import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElencoComponent } from './add-elenco.component';

describe('AddElencoComponent', () => {
  let component: AddElencoComponent;
  let fixture: ComponentFixture<AddElencoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddElencoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddElencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
