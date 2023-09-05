import styled from 'styled-components';

export const Section = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};
`;

export const ClassCard = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const CertCard = styled.div`
  display: flex;
  gap: 12px;
  box-shadow: 4px 4px 10px ${props => props.theme.secondaryAlt};
  padding: 12px;
  min-width: 20rem;
  max-width: 25rem;
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-sizing: border-box;
  margin: 0 1rem;
`;
