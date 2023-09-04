import { FC } from 'react';
import { ToLocaleDateString } from '../../../common/utils';
import styled from 'styled-components';
import { STRING_BREAKPOINTS } from '../../../common/constants';
import LinkIcon from '@mui/icons-material/Link';
import { UdemyCourse } from '../../../data/courses/Udemy';

const Card = styled.div`
  direction: ltr;

  background-color: ${props => props.theme.primary};
  padding: 12px;
  border-radius: 12px;
`;

const Title = styled.div`
  display: flex;
`;

const Body = styled.div`
  color: ${props => props.theme.bg};
  h3 {
    margin: 0;
  }

  div {
    padding-left: 12px;
  }
`;

const Image = styled.div`
  padding-right: 8px;

  img {
    width: 128px;
    @media (max-width: ${STRING_BREAKPOINTS.QUAD}) {
      color: green;
      width: 76px;
    }
    @media (max-width: ${STRING_BREAKPOINTS.DESKTOP}) {
      color: yellow;
      width: 64px;
    }
    @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
      color: red;
      width: 48px;
    }
    @media (max-width: ${STRING_BREAKPOINTS.MOBILE}) {
      color: blue;
      width: 36px;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.accentAlt};

  a {
    display: flex;
    align-items: center;
    gap: 4px;

    color: ${props => props.theme.accentAlt};
    font-size: small;
    font-weight: bold;

    &:hover {
      color: ${props => props.theme.accent};
    }

    svg {
      transform: rotate(-45deg);
    }
  }
`;

export const UdemyCourseCard: FC<{ course: UdemyCourse }> = ({ course }) => {
  const { name, date, courseURL } = course;

  return (
    <Card>
      <Title>
        <Image title='Udemy'>
          <img src='udemy-logo.svg' alt={'Udemy logo'} />
        </Image>

        <Body>
          <h3>{name}</h3>
          <div>{ToLocaleDateString(date)}</div>
        </Body>
      </Title>
      <Footer>
        <a
          href={courseURL.href}
          target='_blank'
          rel='noreferrer'
          title='view certificate (external link)'
        >
          <p>View Course</p>
          <LinkIcon />
        </a>
        <p>from Udemy</p>
      </Footer>
    </Card>
  );
};
