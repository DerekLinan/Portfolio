import { FC } from 'react';
import { Section } from '../../../common/styles';
import styled from 'styled-components';
import { ProjectsList } from './ProjectsList';

const StyledSection = styled(Section)`
  max-width: 1080;
  margin: 1rem 3rem;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    text-shadow: ${props => props.theme.primary} 2px 0 1px;
    padding: 1rem 0;
  }
`;

export const ProjectsSection: FC = () => {
  return (
    <StyledSection id='projects'>
      <h1>Projects</h1>
      <ProjectsList />
    </StyledSection>
  );
};
