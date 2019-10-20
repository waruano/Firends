import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterPage } from './encounter.page';

describe('EncounterPage', () => {
  let component: EncounterPage;
  let fixture: ComponentFixture<EncounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
