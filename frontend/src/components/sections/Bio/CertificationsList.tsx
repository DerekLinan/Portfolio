import { FC } from 'react';
import { CERTIFICATIONS } from '../../../data/certifications';
import { CertificationCard } from './CertificationComponent';

export const CertificationsList: FC = () => {
  return (
    <>
      <h3>Certifications</h3>
      <div>
        {CERTIFICATIONS.map(cert => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </>
  );
};
