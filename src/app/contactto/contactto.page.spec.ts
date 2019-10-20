import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacttoPage } from './contactto.page';

describe('ContacttoPage', () => {
  let component: ContacttoPage;
  let fixture: ComponentFixture<ContacttoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacttoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacttoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
