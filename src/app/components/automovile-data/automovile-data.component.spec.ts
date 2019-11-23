import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovileDataComponent } from './automovile-data.component';

describe('AutomovileDataComponent', () => {
  let component: AutomovileDataComponent;
  let fixture: ComponentFixture<AutomovileDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomovileDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomovileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
