import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLanguagePage } from './change-language.page';

describe('ChangeLanguagePage', () => {
  let component: ChangeLanguagePage;
  let fixture: ComponentFixture<ChangeLanguagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLanguagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
