import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef> | undefined;

  @ViewChild('container')
  containerDiv: ElementRef | undefined;

  constructor() {}

  onCourseSelected(course: Course) {}

  ngAfterViewInit() {
    this.cards?.changes.subscribe(console.log);
    console.log(this.cards);
  }

  onCourseEdited() {
    this.courses.push({
      id: 1,
      description: 'Angular Core Deep Dive',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription:
        'A detailed walk-through of the most important part of Angular - the Core and Common modules',
      category: 'INTERMEDIATE',
      lessonsCount: 10,
    });
  }
}
