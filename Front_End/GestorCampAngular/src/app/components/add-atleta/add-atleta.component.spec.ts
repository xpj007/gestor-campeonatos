import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtletaComponent } from './add-atleta.component';

describe('AddAtletaComponent', () => {
  let component: AddAtletaComponent;
  let fixture: ComponentFixture<AddAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAtletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
