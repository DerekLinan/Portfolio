import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

type Props = {
  images: string[];
  name: string;
};

const Wrapper = styled.div`
  position: relative;
`;

const buttonStyle = css`
  background-color: ${props => props.theme.accent};
  position: absolute;
  top: 40%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.accentAlt};
  }

  &:active {
    filter: brightness(85%);
  }

  svg {
    color: ${props => props.theme.bg};
    font-size: 2rem !important;
  }
`;

const LScroll = styled.button`
  ${buttonStyle}

  left: 16px;
`;

const RScroll = styled.button`
  ${buttonStyle}

  right: 16px;
`;

const ScrollBar = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${props => props.theme.fg};
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    width: 0.6rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${props => props.theme.bg};
  }

  div.active {
    width: 0.8rem;
    background-color: ${props => props.theme.primary};
  }
`;

export const ProjectImageCarousel: FC<Props> = ({ images, name }) => {
  const [currentIndex, setIndex] = useState<number>(0);

  return (
    <Wrapper>
      <LScroll
        onClick={() => {
          setIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        }}
      >
        <ChevronLeft />
      </LScroll>
      <RScroll
        onClick={() => {
          setIndex((currentIndex + 1) % images.length);
        }}
      >
        <ChevronRight />
      </RScroll>
      <ScrollBar>
        {images.map((image, imageIndex) => (
          <div key={image} className={currentIndex === imageIndex ? 'active' : ''} />
        ))}
      </ScrollBar>
      <img src={images[currentIndex]} alt={`image of ${name}`} />
    </Wrapper>
  );
};
