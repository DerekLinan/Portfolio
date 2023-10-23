import { ExitToApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const NavWrapper = styled(motion.nav)`
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

export const buttonStyle = css`
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

export const NavButtonStyle = styled(motion.button)`
  ${buttonStyle}

  &:hover {
    cursor: pointer;
  }
`;

export const NavLinkStyle = styled(motion.a)`
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

export const ExternalIcon = styled(ExitToApp)`
  pointer-events: all;

  position: absolute;
  right: 8px;
  top: 2px;
  font-size: small !important;
`;

export const ThemeSelector = styled(motion.div)`
  pointer-events: all;

  display: flex;
  flex-direction: column;
  align-items: center;

  .darkMode {
    span.MuiSwitch-thumb {
      color: ${props => props.theme.primary};
    }

    span.MuiSwitch-track {
      background-color: ${props => props.theme.primaryAlt};
    }
  }

  .lightMode {
    span.MuiSwitch-thumb {
      color: #0084ff;
    }

    span.MuiSwitch-track {
      background-color: #3094e6;
    }
  }
`;

export const CloseNavButton = styled(NavButtonStyle)`
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

export const OpenNavButton = styled(NavButtonStyle)`
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

export const LightStyle: React.CSSProperties = {
  pointerEvents: 'none',
  color: '#ffa600',
  position: 'absolute',
  transform: 'translate(0, -15%)',
  filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
};

export const DarkStyle: React.CSSProperties = {
  pointerEvents: 'none',
  color: '#ddc95a',
  position: 'absolute',
  filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
};
