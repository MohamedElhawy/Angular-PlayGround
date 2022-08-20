import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwelveComponent } from './page-twelve.component';

describe('PageTwelveComponent', () => {
  let component: PageTwelveComponent;
  let fixture: ComponentFixture<PageTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should be created', () => {

    
    expect(component).toBeInstanceOf(PageTwelveComponent);

  });





});
