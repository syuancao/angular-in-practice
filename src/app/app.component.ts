import { Component, OnInit } from '@angular/core';
import { COURSES } from 'server/db-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]> | undefined;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('Course Saved!'));
  }
}
