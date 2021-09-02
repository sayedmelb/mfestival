import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicListingComponent } from './music-listing.component';

describe('MusicListingComponent', () => {
  let component: MusicListingComponent;
  let fixture: ComponentFixture<MusicListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
