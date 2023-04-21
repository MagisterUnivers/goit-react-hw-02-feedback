import PropTypes from 'prop-types';
import { Title } from 'components';
import css from './Section.module.css';
const Section = ({ title, children }) => (
  <section className={css.section}>
    <Title text={title} />
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
