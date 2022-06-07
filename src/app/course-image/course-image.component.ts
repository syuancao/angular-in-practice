import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.scss'],
})
export class CourseImageComponent implements OnInit {
  @Input('src') imageUrl: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
