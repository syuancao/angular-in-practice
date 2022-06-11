import { Component, OnInit } from '@angular/core';
import { COURSES } from 'server/db-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from './model/course';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]> | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const params = new HttpParams().set('page', '1').set('pageSize', '10');
    this.courses$ = this.http
      .get<Course[]>('/api/courses', { params })
      .pipe(map((value: any) => value['payload']));
  }
}
