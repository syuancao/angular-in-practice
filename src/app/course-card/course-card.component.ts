import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { COURSES_SERVICE } from '../app.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course | undefined;

  @Input()
  cardIndex: number | undefined;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {}

  ngOnInit() {
    console.log(this.coursesService);
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
