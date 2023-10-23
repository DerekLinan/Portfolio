import { FC } from 'react';
import { Section } from '../../../common/styles';
import styled from 'styled-components';
import { STRING_BREAKPOINTS } from '../../../common/constants';
import WebIcon from '@mui/icons-material/Web';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { VideogameAsset } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { bubbleAnimation, listAnim, splashItem, underlay } from './BioAnimations';

const Wrapper = styled(Section)`
  margin-right: 0 !important;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UnderlayTop = styled(motion.div)`
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

const Splash = styled(motion.div)`
  z-index: 3;
  padding: 6rem 0 0 6rem;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    padding: 3rem;
  }

  h2 {
    margin-bottom: 2rem;
    padding: 1rem;
    font-size: 5rem;
    text-shadow: ${props => props.theme.splash} 2px 0 1px;

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

const UnderlayBot = styled(motion.div)`
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

const Bubble = styled(motion.div)`
  background-color: ${props => props.theme.splash};
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

const Bubbles = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
  margin-bottom: 3rem;
`;

export const BioSection: FC = () => {
  return (
    <Wrapper id='bio'>
      <Content initial='hidden' animate='visible' variants={listAnim}>
        <UnderlayTop variants={underlay} />
        <UnderlayBot variants={underlay} />
        <Splash initial='hidden' animate='visible' variants={listAnim}>
          <motion.h2 variants={splashItem}>Derek Linan</motion.h2>
          <motion.ul variants={listAnim}>
            <motion.li variants={splashItem}>Full-stack Web Development</motion.li>
            <motion.li variants={splashItem}>Application Engineering</motion.li>
            <motion.li variants={splashItem}>Game Programming</motion.li>
          </motion.ul>
        </Splash>
      </Content>
      <Bubbles initial='hidden' animate='visible' variants={listAnim}>
        <WebBubble variants={bubbleAnimation(20, -20)}>
          <WebIcon />
        </WebBubble>
        <AppBubble variants={bubbleAnimation(0, -20)}>
          <LaptopMacIcon />
        </AppBubble>
        <GameBubble variants={bubbleAnimation(-20, -20)}>
          <VideogameAsset />
        </GameBubble>
      </Bubbles>
    </Wrapper>
  );
};
