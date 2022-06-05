import { Component } from '@angular/core';
import { COURSES } from '../../server/db-data';
import { Course } from './model/course';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);
  }
}
