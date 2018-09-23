import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css";


export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      topicName: "",
    }
  }
  componentDidUpdate() {
    const eventEnter = document.getElementById('searchbar');
    eventEnter.addEventListener('keypress', (event) => {
      // console.log(`first keydown event. key property value is '${event.key}'`);
      if (event.key === 'Enter') {
        this.searchTopic();
      }
    });
  }

  topicNameHandler = (event) => {
    this.setState({ topicName: event.target.value });
  }
  searchTopic = () => {
    const { topicName } = this.state;
    console.log(topicName);
    window.location = `/results/${topicName}`
  }

  render() {
    return(
      <div className="navbar-container">
        <div className="navbar-margins">
          <div className="app-title-container">
            <Link to='/' ><h1 className="app-title-item"> Newsb</h1></Link>
          </div>
          <div className="searchbar-container">
            <input id="searchbar" className="navbar-searchbar" onChange={this.topicNameHandler} />
            <img className="navbar-icon-item" alt="search-video" onClick={this.searchTopic} src="https://png.icons8.com/ios/1600/search.png" />
          </div>
        </div>
      </div>
    )
  }
}