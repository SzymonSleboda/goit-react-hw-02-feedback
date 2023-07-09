import React, { Component } from 'react';
import s from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
}
onLeaveFeedback = state => {
  this.setState(prevState => ({
    [state]: prevState[state] + 1,
  }));
};
