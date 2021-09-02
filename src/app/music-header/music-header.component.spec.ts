import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicHeaderComponent } from './music-header.component';

describe('MusicHeaderComponent', () => {
  let component: MusicHeaderComponent;
  let fixture: ComponentFixture<MusicHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MusicHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.header')?.textContent).toContain('Energy Australia Coding Challenge');
  });
});
