import React from 'react';

import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import { Feedback } from './Feedback';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // total = 0;

  increment = event => {
    const { id } = event.target;
    this.setState(prevState => {
      return { [id]: prevState[id] + 1 };
    });
  };

  // good = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  //   this.total();
  // };
  // neutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  //   this.total();
  // };

  // bad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //   this.total();
  // };

  positivePercentage = () => {
    const { good } = this.state;
    const positive = (good / this.total()) * 100;
    return positive.toFixed(2);
  };

  // total = () => {
  //   let total = 0;
  //   total += 1;
  //   return total;
  // };

  total = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div>
          <h1>Please leave Feedback</h1>
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
              gap: '20px',
              alignContent: 'center',
              alignItems: 'center',
              flexWrap: 'nowrap',
              flexDirection: 'row',
            }}
          >
            <Feedback handleClick={this.increment} state={this.state} />
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>Statistics</h2>
          {this.state.good === 0 &&
          this.state.neutral === 0 &&
          this.state.bad === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Section title="IHateReact">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.total}
                positivePercentage={this.positivePercentage}
              />
            </Section>
          )}
        </div>
      </div>
    );
  }
}
