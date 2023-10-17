import { FC } from 'react';
import { ProjectCardLink } from './ProjectCardLink';
import CodeIcon from '@mui/icons-material/Code';
import PublicIcon from '@mui/icons-material/Public';

export const ProjectCardLinks: FC<{ siteURL?: string | URL; codeURL?: URL }> = ({
  siteURL,
  codeURL,
}) => {
  return (
    <>
      {siteURL && <ProjectCardLink name='Web' link={siteURL} icon={<PublicIcon />} />}
      {codeURL && <ProjectCardLink name='Code' link={codeURL} icon={<CodeIcon />} />}
    </>
  );
};
