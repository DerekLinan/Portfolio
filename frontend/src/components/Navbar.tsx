import { FC } from 'react';
import styled from 'styled-components';
import { FolderCopy, Email } from '@mui/icons-material';
import { ScrollTo } from '../common/utils';

const NavWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 1em;
  min-height: 90vh;
  gap: 0.5em;
`;

const NavButton = styled.button`
  appearance: none;
  border: none;
  background-color: ${props => props.theme.fg};
  color: ${props => props.theme.bg};
  width: 100%;
  opacity: 50%;
  border-radius: 6px;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 10px -2px ${props => props.theme.fg};
    opacity: 70%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Navbar: FC = () => {
  return (
    <NavWrapper>
      <NavButton onClick={() => ScrollTo('projects')}>
        <div>
          <FolderCopy />
          Projects
        </div>
      </NavButton>
      <NavButton onClick={() => ScrollTo('contact')}>
        <div>
          <Email />
          Contact
        </div>
      </NavButton>
    </NavWrapper>
  );
};
