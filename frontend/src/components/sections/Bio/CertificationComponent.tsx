import { FC } from 'react';
import { Certification } from '../../../data/certifications/types';
import { ToLocaleDateString } from '../../../common/utils';

export const CertificationCard: FC<{ cert: Certification }> = ({ cert }) => {
  const { name, date, issuer, image } = cert;
  return (
    <div>
      <div>{name}</div>
      <div>{ToLocaleDateString(date)}</div>
      <div>{issuer}</div>
    </div>
  );
};
