import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Style = styled.span`
  a {
    color: ${props => props.theme.accentAlt};
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
`;

export const ProjectCardLink: FC<{ name: string; link: URL; icon: ReactNode }> = ({
  name,
  link,
  icon,
}) => {
  return (
    <Style>
      <a href={link.href} target='_blank' rel='noreferrer'>
        {icon}
        <p>{name}</p>
      </a>
    </Style>
  );
};
