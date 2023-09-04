import { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  DarkMode,
  LightMode,
  FolderCopy,
  Email,
  GitHub,
  School,
  Person,
  LinkedIn,
  ExitToApp,
  KeyboardArrowLeft,
  Close,
} from '@mui/icons-material';
import { ScrollTo } from '../common/utils';
import { URLS } from '../common/constants';
import { Switch } from '@mui/material';
import { ViewMode, useViewMode } from '../hooks/useViewMode';

type Props = {
  isLightMode: boolean;
  toggleTheme: () => void;
};

const NavWrapper = styled.nav`
  pointer-events: none;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 1em;
  top: 50vh;
  transform: translate(0, -50%);
  gap: 0.5em;
  z-index: 10;
`;

const buttonStyle = css`
  pointer-events: all;
  appearance: none;
  border: none;
  background-color: ${props => props.theme.fg};
  color: ${props => props.theme.bg};
  width: 100%;
  opacity: 70%;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-out;
  padding: 6px;

  &:hover {
    box-shadow: 3px 3px 10px -2px ${props => props.theme.fg};
    opacity: 90%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavButton = styled.button`
  ${buttonStyle}

  &:hover {
    cursor: pointer;
  }
`;

const NavLink = styled.a`
  ${buttonStyle}

  position: relative;
  box-sizing: border-box;
  font-size: small;
  text-decoration: none;

  &:hover {
    svg:last-of-type {
      font-size: medium !important;
    }
  }
`;

const ExternalIcon = styled(ExitToApp)`
  pointer-events: all;

  position: absolute;
  right: 8px;
  top: 2px;
  font-size: small !important;
`;

const ThemeSelector = styled.div`
  pointer-events: all;

  display: flex;
  flex-direction: column;
  align-items: center;

  span.MuiSwitch-thumb {
    color: ${props => props.theme.primary};
    color: grey;
  }

  .MuiSwitch-root > span.MuiSwitch-track {
    background-color: ${props => props.theme.primaryAlt};
    background-color: lightgray;
  }
`;

const CloseNavButton = styled(NavButton)`
  width: auto;
  display: flex;
  padding: 2px;
  align-self: end;
  border-radius: 50%;
  margin-bottom: 0.5rem;

  svg {
    font-size: medium;
  }
`;

const OpenNavButton = styled(NavButton)`
  width: auto;
  position: fixed;
  right: 4px;
  top: 50vh;
  transform: translate(0, -50%);
  z-index: 10;

  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;

  svg {
    margin: -4px;
  }
`;

const LightStyle: React.CSSProperties = {
  pointerEvents: 'none',
  color: '#ffa600',
  position: 'absolute',
  transform: 'translate(0, -15%)',
};

const DarkStyle: React.CSSProperties = {
  pointerEvents: 'none',
  color: '#ddc95a',
  position: 'absolute',
};

export const Navbar: FC<Props> = ({ isLightMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const viewMode = useViewMode();

  function toggleMenu(toState?: boolean) {
    if (toState !== undefined) return setIsOpen(toState);
    setIsOpen(prev => !prev);
  }

  useEffect(() => {
    if (viewMode === ViewMode.Mobile) toggleMenu(false);
  }, [viewMode]);

  if (!isOpen) {
    return (
      <OpenNavButton title={'close nav menu'} onClick={() => toggleMenu()}>
        <KeyboardArrowLeft />
      </OpenNavButton>
    );
  }

  return (
    <NavWrapper>
      <CloseNavButton title={'close nav menu'} onClick={() => toggleMenu()}>
        <Close />
      </CloseNavButton>
      <ThemeSelector title={`change to ${isLightMode ? 'dark' : 'light'} theme`}>
        <Switch
          key={isLightMode ? 'light' : 'dark'}
          checked={!isLightMode}
          onChange={toggleTheme}
        />
        {isLightMode ? <LightMode style={LightStyle} /> : <DarkMode style={DarkStyle} />}
      </ThemeSelector>
      <NavButton onClick={() => ScrollTo('bio')}>
        <div>
          <Person />
          Bio
        </div>
      </NavButton>
      <NavButton onClick={() => ScrollTo('education')}>
        <div>
          <School />
          Education
        </div>
      </NavButton>
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
      <NavLink href={URLS.GITHUB} target='_blank' rel='noopener noreferrer'>
        <div>
          <GitHub />
          Github
          <ExternalIcon />
        </div>
      </NavLink>
      <NavLink href={URLS.LINKEDIN} target='_blank' rel='noopener noreferrer'>
        <div>
          <LinkedIn />
          LinkedIn
          <ExternalIcon />
        </div>
      </NavLink>
    </NavWrapper>
  );
};
