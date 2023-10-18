import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Project } from '../../../data/projects/projects';
import { ProjectCardLinks } from './ProjectCardLinks';
import { ProjectTag } from './ProjectTag';
import { ProjectImageCarousel } from './ProjectImageCarousel';

type Props = {
  project: Project;
};

const borderThickness = '2px';
const borderStyle = css`
  border: ${borderThickness} solid ${props => props.theme.fg};
  box-sizing: border-box;
`;

const borderRadius = '12px';

const Card = styled.div`
  & > div {
    ${borderStyle};

    border-radius: ${borderRadius};
    overflow: hidden auto;

    display: flex;
    flex-direction: column;

    img,
    .no-image {
      object-fit: contain;
      width: 100%;
      aspect-ratio: 16/9;
    }

    .no-image {
      background-color: ${props => props.theme.fg};
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
      color: ${props => props.theme.bg};

      p {
        padding: 1rem;
      }
    }
  }
`;

const TitleBlock = styled.h3`
  margin: 1rem;
  font-size: xx-large;
  color: ${props => props.theme.primary};
  text-shadow: 1px 1px 0px ${props => props.theme.fg}, -1px 1px 0px ${props => props.theme.fg},
    1px -1px 0px ${props => props.theme.fg}, -1px -1px 0px ${props => props.theme.fg};
  text-align: center;
`;

const InfoBlock = styled.div`
  ${borderStyle};
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top-right-radius: ${borderRadius};

  position: relative;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  font-weight: bold;
  padding: 0.75rem;
  gap: 0.75rem;
`;

const Links = styled.div`
  ${borderStyle}
  border-bottom: none;
  border-top-right-radius: ${borderRadius};
  border-top-left-radius: ${borderRadius};

  background-color: ${props => props.theme.primary};
  position: absolute;
  top: 0;
  left: -${borderThickness};
  transform: translate(0, -100%);
  width: fit-content;
  padding: 0.75rem;
  padding-bottom: 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    ${borderStyle}
    border-top: none;
    border-right: none;

    position: absolute;
    content: '';
    height: ${borderRadius};
    width: ${borderRadius};
    right: -${borderRadius};
    bottom: 0;
    border-bottom-left-radius: ${borderRadius};
    background-color: transparent;
    box-shadow: -4px 4px 0 0 ${props => props.theme.primary};
  }

  & > div {
    color: ${props => props.theme.accent};
  }

  span {
    display: flex;
    gap: 0.5rem;
  }
`;

const Brief = styled.div`
  white-space: pre-wrap;
`;

const Tags = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ProjectCard: FC<Props> = ({ project }) => {
  const { name, brief, imagefile, tags, description, liveSiteURL, codeURL, unavailableReason } =
    project;

  return (
    <Card>
      <div>
        <TitleBlock>{name}</TitleBlock>
        {imagefile ? (
          Array.isArray(imagefile) ? (
            <ProjectImageCarousel images={imagefile} name={name} />
          ) : (
            <img src={imagefile} alt={`image of ${name}`} />
          )
        ) : (
          <div className='no-image'>
            <p>No image yet</p>
          </div>
        )}
        <InfoBlock>
          <Links>
            {unavailableReason ? (
              <div>{unavailableReason}</div>
            ) : (
              <ProjectCardLinks siteURL={liveSiteURL} codeURL={codeURL} />
            )}
          </Links>
          <Brief>{brief}</Brief>
          <Tags>
            {tags
              .sort((a, b) => a.toString().localeCompare(b.toString()))
              .map(tag => (
                <ProjectTag key={tag} tag={tag} />
              ))}
          </Tags>
        </InfoBlock>
      </div>
    </Card>
  );
};
