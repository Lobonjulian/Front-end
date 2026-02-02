import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';

import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
