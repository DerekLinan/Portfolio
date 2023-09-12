import { FC } from 'react';
import { Section } from '../common/styles';
import styled from 'styled-components';
import { STRING_BREAKPOINTS, URLS } from '../common/constants';

const StyledWrapper = styled(Section)`
  scroll-snap-align: end;
  font-weight: bold;
  min-height: min-content;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  @media (max-width: ${STRING_BREAKPOINTS.MOBILE}) {
    flex-direction: column;
    align-items: center;
  }

  a {
    color: ${props => props.theme.accent};
  }

  a:visited {
    color: ${props => props.theme.secondary};
  }

  a:hover {
    filter: brightness(75%);
  }
`;

export const Footer: FC = () => {
  return (
    <StyledWrapper>
      <a href={URLS.GITHUB} target='_blank' rel='noreferrer'>
        <div>Github</div>
      </a>
      <a href={URLS.LINKEDIN} target='_blank' rel='noreferrer'>
        <div>LinkedIn</div>
      </a>
      <div>by Derek Linan, 2023</div>
    </StyledWrapper>
  );
};
