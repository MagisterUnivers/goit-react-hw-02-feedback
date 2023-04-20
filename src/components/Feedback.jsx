/**
  |============================
  | Why do i even need that?
  |============================
*/
import PropTypes from 'prop-types';

export const Feedback = props => {
  return (
    <>
      <button onClick={props.good}>Good</button>
      <button onClick={props.neutral}>Neutral</button>
      <button onClick={props.bad}>Bad</button>
    </>
  );
};

Feedback.propTypes = {
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};
