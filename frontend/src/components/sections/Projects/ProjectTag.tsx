import { FC } from 'react';
import { TagInfo, Tags } from '../../../data/projects/tags';
import styled from 'styled-components';
import { Tooltip } from 'react-tooltip';

const Style = styled.div`
  border-radius: 12px;
  padding: 0.5rem;
  background-color: ${props => props.theme.accent};
`;

const StyledTooltip = styled(Tooltip)`
  &.tooltip {
    color: ${props => props.theme.fg};
    background-color: ${props => props.theme.bg};
    border-radius: 4px;
    font-size: large;
    max-width: 95%;

    b {
      color: ${props => props.theme.accent};
    }

    p {
      margin-bottom: 1rem;
    }
  }
`;

export const ProjectTag: FC<{ tag: Tags; project: string }> = ({ tag, project }) => {
  const tagName = tag.toString();
  const idName = project + tagName + '-tooltip';
  const { description, link } = TagInfo[tag];

  return (
    <>
      <Style data-tooltip-id={idName}>{tag.toString()}</Style>
      <StyledTooltip id={idName} clickable className='tooltip'>
        <p>
          <b>{tagName} </b>
          {description}
        </p>
        {link.length > 1 && (
          <a href={TagInfo[tag].link} target='_blank' rel='noreferrer'>
            More Info
          </a>
        )}
      </StyledTooltip>
    </>
  );
};
