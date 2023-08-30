import { FC } from 'react';
import { LinkedInCourse } from '../../../data/courses/LinkedIn';
import { ToLocaleDateString } from '../../../common/utils';

export const LinkedInCourseCard: FC<{ course: LinkedInCourse }> = ({ course }) => {
  const { name, date, company, companyImage, credentialID, credentialURL } = course;
  return (
    <div>
      <div>{name}</div>
      <div>{ToLocaleDateString(date)}</div>
      <div>{company}</div>
      <div>{credentialID}</div>
      <div>{companyImage}</div>
    </div>
  );
};
