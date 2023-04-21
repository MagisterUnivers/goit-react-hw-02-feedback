import PropTypes from 'prop-types';
import css from './Title.module.css';
const Title = ({ text }) => <h2 className={css.sectionTitle}>{text}</h2>;

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
