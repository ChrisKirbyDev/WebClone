import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogZigzacOneComponent } from './blog-zigzac-one.component';

describe('BlogZigzacOneComponent', () => {
  let component: BlogZigzacOneComponent;
  let fixture: ComponentFixture<BlogZigzacOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogZigzacOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogZigzacOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
