import { FC } from 'react';
import { LINKEDINCOURSES } from '../../../data/courses/LinkedIn';
import { LinkedInCourseCard } from './LinkedInCourseCard';

export const CoursesList: FC = () => {
  return (
    <div>
      <h3>Courses</h3>
      <div>
        {LINKEDINCOURSES.courses.map(course => (
          <LinkedInCourseCard key={course.credentialID} course={course} />
        ))}
      </div>
    </div>
  );
};
