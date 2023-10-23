import { FC } from 'react';
import styled from 'styled-components';
import { ALLPROJECTS } from '../../../data/projects/projects';
import { ProjectCard } from './ProjectCard';
import { STRING_BREAKPOINTS } from '../../../common/constants';

const List = styled.div`
  flex: 1 1 0;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-template-rows: auto;
  gap: 1rem;
  overflow: auto;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectsList: FC = () => {
  return (
    <List>
      {ALLPROJECTS.map(project => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </List>
  );
};
