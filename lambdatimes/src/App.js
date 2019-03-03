import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
  width: 100%;
  background-color: #f1f1f1;
  color: #333;
  * {
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <AppDiv>
      <TopBar />
      <Header />
      <Carousel />
      <Content />
    </AppDiv>
  );
}

export default App;
