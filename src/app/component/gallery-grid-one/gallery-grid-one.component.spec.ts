import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGridOneComponent } from './gallery-grid-one.component';

describe('GalleryGridOneComponent', () => {
  let component: GalleryGridOneComponent;
  let fixture: ComponentFixture<GalleryGridOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryGridOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryGridOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
