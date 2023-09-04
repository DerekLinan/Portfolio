import { FC } from 'react';
import { Section } from '../../../common/styles';
import { CertificationsList } from './CertificationsList';
import { CoursesList } from './CoursesList';
import styled from 'styled-components';
import { STRING_BREAKPOINTS } from '../../../common/constants';

const StyledEducation = styled(Section)`
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    gap: 12px;

    @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
      flex-direction: column;
    }
  }
`;

export const EducationSection: FC = () => {
  return (
    <StyledEducation id='education'>
      <h1>At a glance...</h1>
      <div className='container'>
        <ul>
          <li>Full-stack Web Development</li>
          <li>Game Development</li>
        </ul>
        <CertificationsList />
        <CoursesList />
      </div>
    </StyledEducation>
  );
};
