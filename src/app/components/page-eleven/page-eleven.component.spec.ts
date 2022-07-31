import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElevenComponent } from './page-eleven.component';

describe('PageElevenComponent', () => {
  let component: PageElevenComponent;
  let fixture: ComponentFixture<PageElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
