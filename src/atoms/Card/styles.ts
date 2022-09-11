import styled from 'styled-components';

interface props {
  bg?: string,
  width?: string,
  height?: string,

}

export const Container = styled.div<props>`
  background-color: ${(props => props.bg)};
  width: ${(props => props.width)};
  height: ${(props => props.height)}; 
  color: ${(props => props.color)};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
`;

