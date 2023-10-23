import { FC, useEffect, useState } from 'react';
import {
  DarkMode,
  LightMode,
  FolderCopy,
  Email,
  GitHub,
  School,
  Person,
  LinkedIn,
  KeyboardArrowLeft,
  Remove,
} from '@mui/icons-material';
import { URLS } from '../../common/constants';
import { Switch } from '@mui/material';
import { ViewMode, useViewMode } from '../../hooks/useViewMode';
import { listAnim, navItem, navTrans } from './NavbarAnimations';
import {
  CloseNavButton,
  DarkStyle,
  LightStyle,
  NavWrapper,
  OpenNavButton,
  ThemeSelector,
} from './NavStyles';
import { NavButton } from './NavButton';
import { NavLink } from './NavLink';

type Props = {
  isLightMode: boolean;
  toggleTheme: () => void;
};

export const Navbar: FC<Props> = ({ isLightMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const viewMode = useViewMode();

  function toggleMenu(toState?: boolean) {
    if (toState !== undefined) return setIsOpen(toState);
    setIsOpen(prev => !prev);
  }

  useEffect(() => {
    const elements = document.getElementsByTagName('section');

    if (viewMode > ViewMode.Tablet && isOpen) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('navbar-margin');
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('navbar-margin');
      }
    }
  }, [isOpen, viewMode]);

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
    <NavWrapper initial='hidden' animate='visible' variants={listAnim}>
      <CloseNavButton title={'close nav menu'} onClick={() => toggleMenu()}>
        <Remove />
      </CloseNavButton>
      <ThemeSelector
        title={`change to ${isLightMode ? 'dark' : 'light'} theme`}
        variants={navItem}
        transition={navTrans}
      >
        <Switch
          className={isLightMode ? 'lightMode' : 'darkMode'}
          key={isLightMode ? 'light' : 'dark'}
          checked={!isLightMode}
          onChange={toggleTheme}
        />
        {isLightMode ? <LightMode style={LightStyle} /> : <DarkMode style={DarkStyle} />}
      </ThemeSelector>
      <NavButton scrollTo='bio'>
        <Person />
        Bio
      </NavButton>
      <NavButton scrollTo='education'>
        <School />
        Education
      </NavButton>
      <NavButton scrollTo='projects'>
        <FolderCopy />
        Projects
      </NavButton>
      {/* <NavButton scrollTo='contact'>
        <Email />
        Contact
      </NavButton> */}
      <NavLink href={URLS.GITHUB}>
        <GitHub />
        Github
      </NavLink>
      <NavLink href={URLS.LINKEDIN}>
        <LinkedIn />
        LinkedIn
      </NavLink>
    </NavWrapper>
  );
};
