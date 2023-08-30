import { FC } from 'react';
import { CERTIFICATIONS } from '../../../data/certifications';
import { CertificationCard } from './CertificationCard';

export const CertificationsList: FC = () => {
  return (
    <div>
      <h3>Certifications</h3>
      <div>
        {CERTIFICATIONS.map(cert => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
};
