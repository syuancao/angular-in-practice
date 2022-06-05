import * as express from 'express';
import { Application } from 'express';
import { getAllCourses } from './get-courses.route';
import { saveCourse } from './save-course.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);

const httpServer: any = app.listen(9000, () => {
  console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
