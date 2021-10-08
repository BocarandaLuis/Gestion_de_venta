import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketPage } from './backet.page';

describe('BacketPage', () => {
  let component: BacketPage;
  let fixture: ComponentFixture<BacketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
