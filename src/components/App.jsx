import { useState } from 'react';
import { Section, Notification, Statistics, FeedbackOptions } from './index';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increment = event => {
    const { id } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [id]: prevFeedback[id] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (100 * (feedback.good / countTotalFeedback())).toFixed(0);
  };

  return (
    <div
      style={{
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // gap: 60,
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 26,
        // color: '#010101',
        paddingLeft: 15,
        paddingTop: 15,
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={increment}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
