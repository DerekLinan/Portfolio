import { FC } from 'react';
import { Section } from '../../common/styles';
import styled from 'styled-components';
import { STRING_BREAKPOINTS } from '../../common/constants';
import WebIcon from '@mui/icons-material/Web';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { VideogameAsset } from '@mui/icons-material';

const Wrapper = styled(Section)`
  margin-right: 0 !important;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UnderlayTop = styled.div`
  background-color: ${props => props.theme.bg};
  box-shadow: 2px 1px 10px ${props => props.theme.secondaryAlt};
  background: linear-gradient(
    -20deg,
    ${props => props.theme.primary} 50%,
    ${props => props.theme.primaryAlt} 100%
  );
  position: absolute;
  left: -10vw;
  aspect-ratio: 1;
  top: -50vh;
  bottom: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 2rem;
  border-radius: 50%;
`;

const Splash = styled.div`
  z-index: 3;
  padding: 6rem 0 0 6rem;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    padding: 3rem;
  }

  h2 {
    margin-bottom: 2rem;
    padding: 1rem;
    font-size: 5rem;
    text-shadow: #fc0 2px 0 1px;

    background-color: ${props => props.theme.secondary};
    background: linear-gradient(
      30deg,
      ${props => props.theme.secondary} 0%,
      ${props => props.theme.secondaryAlt} 50%,
      ${props => props.theme.secondary} 100%
    );
    background-clip: content-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  li {
    font-size: xxx-large;
    font-weight: bold;
    text-shadow: 2px 1px 0 ${props => props.theme.secondary};
    word-wrap: nowrap;

    margin-left: 6rem;
    list-style-type: '📇 ';

    @media (max-width: ${STRING_BREAKPOINTS.DESKTOP}) {
      font-size: xx-large;
    }

    @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
      margin-left: 2rem !important;
      font-size: x-large;
    }

    @media (max-width: ${STRING_BREAKPOINTS.MOBILE}) {
      margin-left: 1rem !important;
      font-size: large;
    }
  }

  li::marker {
    text-shadow: none;
  }

  li:first-of-type {
    margin-left: 12rem;
    list-style-type: '🔨 ';
  }

  li:last-of-type {
    margin-left: 0rem;
    list-style-type: '🎮 ';
  }
`;

const UnderlayBot = styled.div`
  background-color: ${props => props.theme.bg};
  box-shadow: inset 2px 10px 10px ${props => props.theme.secondaryAlt};
  background: linear-gradient(
    -20deg,
    ${props => props.theme.primary} 50%,
    ${props => props.theme.primaryAlt} 100%
  );
  position: absolute;
  right: -10vw;
  aspect-ratio: 1;
  width: 60vw;
  bottom: -20vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Bubble = styled.div`
  background-color: #fc0;
  box-shadow: inset 2px 1px ${props => props.theme.secondaryAlt};
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: xxx-large;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    position: static !important;
  }
`;

const WebBubble = styled(Bubble)`
  position: absolute;
  left: 5vw;
  bottom: 20vh;
`;

const AppBubble = styled(Bubble)`
  position: absolute;
  left: 45vw;
  bottom: 10vh;
`;

const GameBubble = styled(Bubble)`
  position: absolute;
  right: 10vw;
  top: 10vh;
`;

const Bubbles = styled.div`
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
  margin-bottom: 3rem;
`;

export const BioSection: FC = () => {
  return (
    <Wrapper id='bio'>
      <Content>
        <UnderlayTop />
        <UnderlayBot />
        <Splash>
          <h2>Derek Linan</h2>
          <ul>
            <li>Full-stack Web Development</li>
            <li>Application Engineering</li>
            <li>Game Programming</li>
          </ul>
        </Splash>
      </Content>
      <Bubbles>
        <WebBubble>
          <WebIcon />
        </WebBubble>
        <AppBubble>
          <LaptopMacIcon />
        </AppBubble>
        <GameBubble>
          <VideogameAsset />
        </GameBubble>
      </Bubbles>
    </Wrapper>
  );
};
