import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { tabData, cardData } from '../../data';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs: tabData, cards: cardData})
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected: tab})
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted

      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows:
        - if the selected tab is 'all' it should return all
          of the items from cardData.
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */

    if (this.state.selected === 'all') {
      return this.state.cards
    } else {
      return this.state.cards.filter( input => input.tab.includes(this.state.selected))
    }
  };

  render() {
    return (
      <ContentContainer>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}

Content.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  )
}
