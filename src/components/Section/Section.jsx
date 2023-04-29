import PropTypes from 'prop-types';
import Title from '../Title/Title';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={css.section}>
      <Title text={title} />
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
