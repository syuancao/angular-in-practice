import { Component, OnInit } from '@angular/core';
import { COURSES } from 'server/db-data';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  courses = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const params = new HttpParams().set('page', '1').set('pageSize', '10');
    this.http
      .get('/api/courses', { params })
      .subscribe((courses: any) => (this.courses = courses.payload));
  }
}
