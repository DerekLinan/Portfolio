import { FC } from 'react';
import { ToLocaleDateString } from '../../../common/utils';
import styled from 'styled-components';
import { CERTIFICATIONS } from '../../../data/certifications';
import { CertCard } from '../../../common/styles';

const Card = styled(CertCard)`
  background-image: url(img-noise-344x204.png);
  cursor: pointer;

  & > div {
    display: flex;
    flex-direction: column;
    color: black;
    padding: 12px;
    box-sizing: border-box;
    border: 6px solid #c49642;
    height: 100%;
    width: 100%;
  }
`;

const Top = styled.div`
  text-align: center;

  & > div:first-child {
    font-weight: bold;
  }

  & > div:last-child {
    margin: 0.5rem;
    font-size: x-small;
  }
`;

const Bottom = styled.div`
  flex: 1 1 0;
  display: flex;
  gap: 1rem;

  & > div {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Line = styled.div`
  border: 4px solid grey;
  border-radius: 4px;
`;

const Emblem = styled.div`
  position: relative;

  background-color: #ce9a0c;
  border-radius: 50%;
  margin: auto;
  height: 100%;
  aspect-ratio: 1;

  // auto-generated from https://css-generators.com/starburst-shape/
  clip-path: polygon(
    100% 50%,
    91.64% 55.48%,
    98.3% 62.94%,
    88.8% 66.07%,
    93.3% 75%,
    83.32% 75.57%,
    85.36% 85.36%,
    75.57% 83.32%,
    75% 93.3%,
    66.07% 88.8%,
    62.94% 98.3%,
    55.48% 91.64%,
    50% 100%,
    44.52% 91.64%,
    37.06% 98.3%,
    33.93% 88.8%,
    25% 93.3%,
    24.43% 83.32%,
    14.64% 85.36%,
    16.68% 75.57%,
    6.7% 75%,
    11.2% 66.07%,
    1.7% 62.94%,
    8.36% 55.48%,
    0% 50%,
    8.36% 44.52%,
    1.7% 37.06%,
    11.2% 33.93%,
    6.7% 25%,
    16.68% 24.43%,
    14.64% 14.64%,
    24.43% 16.68%,
    25% 6.7%,
    33.93% 11.2%,
    37.06% 1.7%,
    44.52% 8.36%,
    50% 0%,
    55.48% 8.36%,
    62.94% 1.7%,
    66.07% 11.2%,
    75% 6.7%,
    75.57% 16.68%,
    85.36% 14.64%,
    83.32% 24.43%,
    93.3% 25%,
    88.8% 33.93%,
    98.3% 37.06%,
    91.64% 44.52%
  );

  & > div {
    position: absolute;
    inset: 1.25rem;
    border-radius: 50%;
    border: 3px solid #c5b208;
    outline: 3px dashed #c5b208;
    outline-offset: 0.25rem;
  }
`;

export const AppDevCertCard: FC = () => {
  const { name, issuer, date, image } = CERTIFICATIONS.appDev;
  return (
    <a
      href={image}
      target='_blank'
      rel='noreferrer'
      title='view certificate (new tab)'
      style={{ textDecoration: 'none' }}
    >
      <Card>
        <div>
          <Top>
            <div>{name}</div>
            <div>{ToLocaleDateString(date)}</div>
            <div>{issuer}</div>
          </Top>
          <Bottom>
            <div>
              <Line style={{ marginRight: '12px' }} />
              <Line />
            </div>
            <div>
              <Emblem>
                <div />
              </Emblem>
            </div>
            <div>
              <Line />
              <Line style={{ margin: '0 12px' }} />
              <Line />
            </div>
          </Bottom>
        </div>
      </Card>
    </a>
  );
};
