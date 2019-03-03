import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: carouselData,
      index: 0,
      Image: ''
    }
  }
  componentDidMount(){
    this.setState({Image: this.state.data[this.state.index]})
  }

  leftClick = () => {
    if (this.state.index === 0) {
      this.setState({index: 3, Image: this.state.data[3]})
    }
    else {
    this.setState({index: this.state.index-=1, Image: this.state.data[this.state.index]})
    }
  }

  rightClick = () => {
    if (this.state.index === 3) {
      this.setState({index: 0, Image: this.state.data[0]})
    }
    else {
      this.setState({index: this.state.index+=1, Image: this.state.data[this.state.index]})
    }
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.Image} style={{display: 'block'}} />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
