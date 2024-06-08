import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogtileComponent } from './blogtile.component';

describe('BlogtileComponent', () => {
  let component: BlogtileComponent;
  let fixture: ComponentFixture<BlogtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogtileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
