import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJediComponent } from './add-jedi.component';

describe('AddJediComponent', () => {
  let component: AddJediComponent;
  let fixture: ComponentFixture<AddJediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
