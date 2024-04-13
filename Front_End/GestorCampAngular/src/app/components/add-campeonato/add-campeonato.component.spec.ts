import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampeonatoComponent } from './add-campeonato.component';

describe('AddCampeonatoComponent', () => {
  let component: AddCampeonatoComponent;
  let fixture: ComponentFixture<AddCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
