import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNineComponent } from './page-nine.component';

describe('PageNineComponent', () => {
  let component: PageNineComponent;
  let fixture: ComponentFixture<PageNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  // test
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should return" , ()=>{
    
    expect(component.do_something()).toEqual("hi");

  });


  it("evaluate to true", ()=>{

    expect(component.do_something_else()).toBeTruthy();

  })





});
