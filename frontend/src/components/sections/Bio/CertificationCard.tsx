import { FC } from 'react';
import { Certification } from '../../../data/certifications/types';
import { ToLocaleDateString } from '../../../common/utils';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  gap: 12px;
  box-shadow: 4px 4px 10px ${props => props.theme.secondaryAlt};
  padding: 12px;
  max-width: 20rem;
  border-radius: 4px;
  background-color: #e4eef1;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 5 5 auto;
    flex-basis: 0;
  }

  .name-div {
    color: ${props => props.theme.primary};
    font-size: large;
    font-weight: bold;
  }

  .date-div {
    color: ${props => props.theme.primaryAlt};
  }

  .issuer-div {
    color: ${props => props.theme.primaryAlt};
    font-size: small;
  }

  .bar {
    background-color: ${props => props.theme.secondary};
    margin-top: 8px;
    margin-right: 32px;
    height: 8px;
    border-radius: 4px;
  }
`;

const Banner = styled.div`
  background-color: ${props => props.theme.accentAlt};
  min-width: 2rem;
  max-width: 3rem;
  flex: 1 1 auto;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  clip-path: polygon(0 0, 100% 0%, 100% 85%, 50% 100%, 0 85%);

  > div:first-child {
    width: 100%;
    aspect-ratio: 3/1;
    background-color: ${props => props.theme.secondaryAlt};
  }
`;

const CertC = styled.div`
  display: grid;

  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.primary};
  outline: 1px dashed ${props => props.theme.primary};
  outline-offset: 2px;
  overflow: hidden;

  > div {
    grid-row: 1;
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .top {
    width: 70%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${props => props.theme.primary};
  }

  .bottom {
    width: 35%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${props => props.theme.accentAlt};
  }

  .cutout {
    width: 50%;
    aspect-ratio: 1;
    background-color: ${props => props.theme.accentAlt};
    transform: translate(90%) rotate(45deg);
    transform-origin: center;
  }
`;

export const CertificationCard: FC<{ cert: Certification }> = ({ cert }) => {
  const { name, date, issuer, image } = cert;
  return (
    <Card>
      <div>
        <div className='name-div'>{name}</div>
        <div className='date-div'>{ToLocaleDateString(date)}</div>
        <div className='issuer-div'>{issuer}</div>
        <div className='bar' />
      </div>
      <Banner>
        <div />
        <CertC>
          <div>
            <div className='top' />
          </div>
          <div>
            <div className='bottom' />
          </div>
          <div>
            <div className='cutout' />
          </div>
        </CertC>
      </Banner>
    </Card>
  );
};
