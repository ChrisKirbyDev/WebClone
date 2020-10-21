import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGridTwoComponent } from './gallery-grid-two.component';

describe('GalleryGridTwoComponent', () => {
  let component: GalleryGridTwoComponent;
  let fixture: ComponentFixture<GalleryGridTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryGridTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryGridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
