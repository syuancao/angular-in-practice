import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input() course: Course | undefined;
  @Input() cardIndex: number | undefined;
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.image);
  }

  onCourseViewed() {
    // console.log('card component - button clicked ...');
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course?.category === 'BEGINNER') {
      return ['beginner'];
    } else {
      return '';
    }
  }

  cardStyles() {
    return { 'background-image': 'url(' + this.course?.iconUrl + ')' };
  }
}
