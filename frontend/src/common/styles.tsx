import styled from 'styled-components';
import { ViewMode } from '../hooks/useViewMode';

export const Section = styled.div`
  height: 50vh;

  @media (max-width: ${ViewMode.Mobile}) {
    height: 100vh;
  }

  &#projects {
    height: 100vh;
  }
`;
