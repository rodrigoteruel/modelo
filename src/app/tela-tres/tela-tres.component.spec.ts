import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTresComponent } from './tela-tres.component';

describe('TelaTresComponent', () => {
  let component: TelaTresComponent;
  let fixture: ComponentFixture<TelaTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
