import { FC } from 'react';
import { Tags } from '../../../data/projects/projects';
import styled from 'styled-components';

const Style = styled.div`
  border-radius: 12px;
  padding: 0.5rem;
  background-color: ${props => props.theme.accent};
`;

export const ProjectTag: FC<{ tag: Tags }> = ({ tag }) => {
  return <Style>{tag.toString()}</Style>;
};
