import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogZigzacTwoComponent } from './blog-zigzac-two.component';

describe('BlogZigzacTwoComponent', () => {
  let component: BlogZigzacTwoComponent;
  let fixture: ComponentFixture<BlogZigzacTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogZigzacTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogZigzacTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
