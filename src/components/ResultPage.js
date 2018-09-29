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
      topic: '',
    }
  }
  componentDidMount() {
    const myTopic = (window.location.href).split('/').pop();
    this.setState({ topic: myTopic.replace(/%20/g, ' ')})
  }
  render() {
    const { topic } = this.state;
    return(
      <div>
        <Navbar />
        <NewsTrends />
        <div className="app-container">
          <h2 className = "topic-title"> Topic: {topic}</h2>
          <div className="news-divide-container">
            <Liberal topic={(window.location.href).split('/').pop()}/>
            <Conservative topic={(window.location.href).split('/').pop()}/>
          </div>
        </div>
      </div>
    )
  }
}