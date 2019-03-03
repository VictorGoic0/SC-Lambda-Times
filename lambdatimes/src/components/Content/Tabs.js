import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
}
@media (min-width: 1280px) {
  width: 1280px;
}
`

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`

const TopicsSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <TabsDiv>
      <Topics>
        <TopicsSpan>TRENDING TOPICS:</TopicsSpan>
        {props.tabs.map( input => <Tab tab={input} key={input} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />)}
      </Topics>
    </TabsDiv>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Tabs;
