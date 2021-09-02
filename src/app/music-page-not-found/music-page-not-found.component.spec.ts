import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPageNotFoundComponent } from './music-page-not-found.component';

describe('MusicPageNotFoundComponent', () => {
  let component: MusicPageNotFoundComponent;
  let fixture: ComponentFixture<MusicPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
