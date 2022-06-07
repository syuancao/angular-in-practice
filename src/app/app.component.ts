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
}
