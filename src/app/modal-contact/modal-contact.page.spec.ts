import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalContactPage } from './modal-contact.page';

describe('ModalContactPage', () => {
  let component: ModalContactPage;
  let fixture: ComponentFixture<ModalContactPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
