import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReverseStringPipe } from 'src/app/pipes/reverse-string.pipe';



import { PageSixComponent } from './page-six.component';

describe('PageSixComponent', () => {
  let component: PageSixComponent;
  let fixture: ComponentFixture<PageSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSixComponent , ReverseStringPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
