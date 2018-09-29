import React, { Component } from "react";
import Liberal from "./Liberal";
import Conservative from "./Conservative";
import Navbar from "./Navbar";
import NewsTrends from './NewsTrends';
import "../CSS/Homepage.css";
import "../CSS/Conservative.css";
import "../CSS/Liberal.css";
axios.defaults.withCredentials = true;
export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      topic: 'Trump'
    }
  }

  render() {
    const { topic } = this.state;
    console.log(topic);
    return(
      <div>
        <Navbar />
        <NewsTrends />
        <div className="app-container">
          <h1 className="breaking-news-title"> Breaking News </h1>
          <h2 className = "breaking-news-title"> Topic: {topic}</h2>
          <div className="news-divide-container">
            <Liberal topic={topic}/>
            <Conservative topic={topic}/>
          </div>
        </div>
      </div>
    )
  }
}