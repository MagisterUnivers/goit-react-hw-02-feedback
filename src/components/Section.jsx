/**
  |============================
  | Section thing
  |============================
*/

import PropTypes from 'prop-types';

export const Section = props => {
  return <section title={props.title}>{props.children}</section>;
};

Section.propTypes = {
  title: PropTypes.string,
};
