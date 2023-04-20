/**
  |============================
  | Notification thing
  |============================
*/
import PropTypes from 'prop-types';

export const Notification = props => {
  return <h1>{props.message}</h1>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
