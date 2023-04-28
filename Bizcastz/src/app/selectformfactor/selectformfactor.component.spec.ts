import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectformfactorComponent } from './selectformfactor.component';

describe('SelectformfactorComponent', () => {
  let component: SelectformfactorComponent;
  let fixture: ComponentFixture<SelectformfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectformfactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectformfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
