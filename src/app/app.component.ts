import { Component, OnInit } from '@angular/core';
import { COURSES } from 'server/db-data';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  courses = COURSES;

  constructor() {}

  ngOnInit() {}
}
