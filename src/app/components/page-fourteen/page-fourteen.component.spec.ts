import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourteenComponent } from './page-fourteen.component';

describe('PageFourteenComponent', () => {
  let component: PageFourteenComponent;
  let fixture: ComponentFixture<PageFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
