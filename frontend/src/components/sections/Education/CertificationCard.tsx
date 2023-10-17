import { FC } from 'react';
import { Certification } from '../../../data/certifications/types';
import { ToLocaleDateString } from '../../../common/utils';
import styled from 'styled-components';
import { CertCard } from '../../../common/styles';

const Card = styled(CertCard)`
  background-color: #e4eef1;
  position: relative;

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
    margin-top: auto;
    margin-bottom: 1rem;
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

const ProgressBanner = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  top: -4px;
  right: -4px;

  & > div {
    width: 200px;
    padding: 15px;
    background-color: green;
    color: white;
    text-align: center;
    transform: translate(-8%, 65%) rotate(45deg);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
    text-transform: uppercase;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const CertificationCard: FC<{ cert: Certification; inProgressLink?: URL }> = ({
  cert,
  inProgressLink,
}) => {
  const { name, date, issuer, image } = cert;
  console.log(image ?? inProgressLink?.href);
  return (
    <a
      href={image ? image : inProgressLink?.href}
      target='_blank'
      rel='noreferrer'
      title='view certificate (new tab)'
      style={{ textDecoration: 'none' }}
    >
      <Card>
        <div>
          <div className='name-div'>{name}</div>
          <div className='date-div'>
            {inProgressLink ? 'Not yet complete' : ToLocaleDateString(date)}
          </div>
          <div className='issuer-div'>{issuer}</div>
          <div
            className='bar'
            style={{
              marginBottom: '0',
              marginRight: '5rem',
              marginLeft: '1.5rem',
            }}
          />
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
        {inProgressLink && (
          <ProgressBanner>
            <div>In Progress</div>
          </ProgressBanner>
        )}
      </Card>
    </a>
  );
};
