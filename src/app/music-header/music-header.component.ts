import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-header',
  templateUrl: './music-header.component.html',
  styleUrls: ['./music-header.component.scss']
})
export class MusicHeaderComponent implements OnInit {
  title: string ='';
  constructor() { }

  ngOnInit(): void {
    this.title = "Energy Australia Coding Challenge"
  }

}
