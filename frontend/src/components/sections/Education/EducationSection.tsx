import { FC } from 'react';
import { Section } from '../../../common/styles';
import { CertificationsList } from './CertificationsList';
import { CoursesList } from './CoursesList';
import styled from 'styled-components';
import { STRING_BREAKPOINTS } from '../../../common/constants';

const StyledEducation = styled(Section)`
  margin: 1rem 3rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${STRING_BREAKPOINTS.DESKTOP}) {
    text-align: center;
  }

  .container {
    flex: 1 1 0;
    display: flex;
    gap: 1rem;

    @media (max-width: ${STRING_BREAKPOINTS.DESKTOP}) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const EducationSection: FC = () => {
  return (
    <StyledEducation id='education'>
      <h1>Education</h1>
      <div className='container'>
        <CertificationsList />
        <CoursesList />
      </div>
    </StyledEducation>
  );
};
