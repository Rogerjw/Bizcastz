import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedformComponent } from './selectedform.component';

describe('SelectedformComponent', () => {
  let component: SelectedformComponent;
  let fixture: ComponentFixture<SelectedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
