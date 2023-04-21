/**
  |============================
  | Why do i even need that?
  |============================
*/
import PropTypes from 'prop-types';

export const Feedback = props => {
  return (
    <>
      {Object.keys(props.state).map(btn => {
        return (
          <button key={btn} id={btn} onClick={props.handleClick}>
            {btn}
          </button>
        );
      })}
      {/* <button id="good" onClick={props.handleClick}>
        Good
      </button>
      <button id="neutral" onClick={props.handleClick}>
        Neutral
      </button>
      <button id="bad" onClick={props.handleClick}>
        Bad
      </button> */}
    </>
  );
};

Feedback.propTypes = {
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};
