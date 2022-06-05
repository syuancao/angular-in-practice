import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from '../../server/db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChild('cardRef1', { read: ElementRef })
  card1: CourseCardComponent | undefined;

  @ViewChild('container')
  containerDiv: ElementRef | undefined;

  constructor() {
    console.log('containerDiv', this.card1);
  }

  onCourseSelected(course: Course) {
    console.log('containerDiv', this.card1);
  }

  ngAfterViewInit() {
    console.log('containerDiv', this.card1);
  }
}
