import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLandingComponent } from './music-landing.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MusicLandingComponent', () => {
  let component: MusicLandingComponent;
  let fixture: ComponentFixture<MusicLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MusicLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
