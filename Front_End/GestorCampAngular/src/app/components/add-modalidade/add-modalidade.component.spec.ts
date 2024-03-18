import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalidadeComponent } from './add-modalidade.component';

describe('AddModalidadeComponent', () => {
  let component: AddModalidadeComponent;
  let fixture: ComponentFixture<AddModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
