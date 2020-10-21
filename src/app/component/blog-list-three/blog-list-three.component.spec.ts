import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListThreeComponent } from './blog-list-three.component';

describe('BlogListThreeComponent', () => {
  let component: BlogListThreeComponent;
  let fixture: ComponentFixture<BlogListThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogListThreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
