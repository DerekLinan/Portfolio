import { FC } from 'react';
import { Section } from '../../../common/styles';
import { CertificationsList } from './CertificationsList';
import { CoursesList } from './CoursesList';

export const BioSection: FC = () => {
  return (
    <Section id='bio'>
      <h1>At a glance...</h1>
      <ul>
        <li>Full-stack Web Development</li>
        <li>Game Development</li>
      </ul>
      <CertificationsList />
      <CoursesList />
    </Section>
  );
};
