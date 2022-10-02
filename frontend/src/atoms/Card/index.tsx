import React from 'react';
import {Colors} from '../../GlobalStyle/index';
import { Container } from './styles';



type Props = {
  children: JSX.Element[],
  bg?: string,
  width?: string,
  height?: string,
  Color?: string
 };
 const card: React.FC <Props> = ({ 
   children,
    bg,
    width,
    height,
    Color,
   
 }:Props) => {
 
   return (
     <Container 
     bg={bg}
     width={width}
     height={height}
     color= {Color}
     >
       {children}
     </Container>
   );
 }
 
 


export default card;