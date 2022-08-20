import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { PageTenComponent } from './page-ten.component';

describe('PageTenComponent', () => {
  let component: PageTenComponent;
  let fixture: ComponentFixture<PageTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTenComponent , FormBuilder ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
