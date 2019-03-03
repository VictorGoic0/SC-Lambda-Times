import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`
const dynamicStyle = {
  backgroundColor:'#fff',
  color:'#333',
  border:'2px solid #333'
}

const Tab = props => {
  return (
    <TabDiv onClick={() => props.selectTabHandler(props.tab)}
    style={props.tab===props.selectedTab ? dynamicStyle : {}}>
      {props.tab.toUpperCase()}
    </TabDiv>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired
}

export default Tab;
