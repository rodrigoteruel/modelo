import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaQuatroComponent } from './tela-quatro.component';

describe('TelaQuatroComponent', () => {
  let component: TelaQuatroComponent;
  let fixture: ComponentFixture<TelaQuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaQuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
