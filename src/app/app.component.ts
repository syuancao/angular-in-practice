import { Component } from '@angular/core';
import { COURSES } from '../../server/db-data';
import { Course } from './model/course';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  courses = COURSES;
  title = COURSES[0].description;
  price = 9.994517874;
  rate = 0.67;
  course = COURSES[0];
  startDate = new Date(2000, 0, 1);
  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);
  }
}
