import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course | undefined;
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewed() {
    console.log('card component - button clicked ...');
    this.courseEmitter.emit(this.course);
  }
}
