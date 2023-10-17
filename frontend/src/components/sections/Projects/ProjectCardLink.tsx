import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Style = styled.span`
  color: ${props => props.theme.accentAlt};

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a:visited {
    color: ${props => props.theme.accent};
  }

  a:hover {
    filter: brightness(75%);
  }

  &.not-allowed {
    cursor: not-allowed;
  }
`;

export const ProjectCardLink: FC<{ name: string; link: string | URL; icon: ReactNode }> = ({
  name,
  link,
  icon,
}) => {
  if (typeof link === 'string')
    return (
      <Style title={link} className='not-allowed'>
        {icon}
        <p>{name}</p>
      </Style>
    );

  return (
    <Style>
      <a href={link.href} target='_blank' rel='noreferrer'>
        {icon}
        <p>{name}</p>
      </a>
    </Style>
  );
};
