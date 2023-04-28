import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfactorComponent } from './formfactor.component';

describe('FormfactorComponent', () => {
  let component: FormfactorComponent;
  let fixture: ComponentFixture<FormfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
