import styles from './Sections.module.css';

const Sections = ({ className, children }) => {
  return (
    <section className={className + ' ' + styles.sections}>{children}</section>
  );
};

export default Sections;
