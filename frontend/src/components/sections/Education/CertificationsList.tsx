import { FC } from 'react';
import { CERTIFICATIONS } from '../../../data/certifications';
import { CertificationCard } from './CertificationCard';
import styled from 'styled-components';
import { AppDevCertCard } from './AppDevCertCard';
import { STRING_BREAKPOINTS } from '../../../common/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 90vh;

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    max-height: fit-content;
  }

  h2 {
    margin-bottom: 8px;
    text-align: center;

    @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
      margin-bottom: 0.25rem;
    }
  }
`;

const CertificationList = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 100%;
  overflow: auto;
  overscroll-behavior: none;
  & > div:first-of-type {
    margin-top: 8px;
  }

  @media (max-width: ${STRING_BREAKPOINTS.TABLET}) {
    align-items: center;
    max-height: 25vh;
    flex: 0 0 auto;
  }
`;

export const CertificationsList: FC = () => {
  return (
    <Wrapper>
      <h2>Certifications</h2>
      <CertificationList>
        {CERTIFICATIONS.coursera.map(cert => (
          <CertificationCard key={cert.id} cert={cert} inProgress={cert.inProgress} />
        ))}
        <AppDevCertCard />
      </CertificationList>
    </Wrapper>
  );
};
