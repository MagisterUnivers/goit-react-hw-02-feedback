import PropTypes from 'prop-types';
import { Button } from 'components';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li key={option}>
          <Button
            text={option.slice(0, 1).toUpperCase() + option.slice(1)}
            clickHandler={onLeaveFeedback}
          />
        </li>
      ))}
    </ul>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
