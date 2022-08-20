import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThirteenComponent } from './page-thirteen.component';

describe('PageThirteenComponent', () => {
  let component: PageThirteenComponent;
  let fixture: ComponentFixture<PageThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
