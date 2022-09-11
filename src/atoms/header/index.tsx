import React from 'react';

import { Container } from './styles';
type Props = {
  children: JSX.Element
}
const header: React.FC <Props> = ({
  children,
}:Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default header;