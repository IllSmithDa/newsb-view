import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import reqURL from './ReqURL';
import '../CSS/Navbar.css';
import '../CSS/NewsTrends.css';
axios.defaults.withCredentials = true;
export default class NewsTrends extends Component {
  constructor() {
    super();
    this.state = {
      topicList: [],
    }
  }
  componentDidMount() {
    axios.get(`${reqURL}/findGoogleTrends`)
      .then((data) => {
        this.setState({ topicList: data.data});
      })
      .catch((err) => {
        throw err;
      })
  }


  render() {
    const { topicList }  = this.state;
    console.log(topicList['0']);
    return(
      <div className="newstrends-container">
        <div className="newstrends-margins">
          <div className="app-results-container">
          <h3>News Trends</h3>
            {topicList.map((val) => {
              return(
                <a className="topics-item" href={`/results/${val}`}>{val}</a>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}