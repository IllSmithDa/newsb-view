import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import reqURL from './ReqURL';
import '../CSS/Navbar.css';
import '../CSS/NewsTrends.css';

export default class Neutral extends Component {
  constructor() {
    super();
    this.state = {
      newsList: [],
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
    const { newsList }  = this.state;
    console.log(topicList['0']);
    return(
      <div className="newstrends-container">
        <div className="newstrends-margins">
          <div className="app-results-container">
          <h3>News Trends</h3>
            {newsList.map((val) => {
              return(
                <div>
                  <h4><br /><b>{data.title}</b></h4>
                  <p> Published on: {data.pubDate}</p>
                  <p> Source: {data.publisher}</p>
                  <a href={data.link}> link: {data.link}</a>
                  <p> <br /><b>Description:</b> {data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}