
import styled from 'styled-components';
// BG Image
//import bgImage from '../bg.jpg';

//background: url(${bgImage}) #000;

export const StyledPlayAreaWrapper = styled.div`

  width: 100vw;
  height: 100vh;
  
  background-size: cover;
  overflow: hidden;
  z-index:100px;
`;

export const StyledPlayArea = styled.div`
  display: flex;
  height: 200px;
  border-style: solid;
  border-width: 5px;
  border-color: palevioletred;
  align-items: flex-start;
  padding: 40px;
  margin: 25px auto;
  z-index:10px;
  background: white;
  overflow: hidden;
  max-width: 1000px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;