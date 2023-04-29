import PropTypes from 'prop-types';

function Button({ text, clickHandler }) {
  return (
    <button type="button" id={text.toLowerCase()} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};
