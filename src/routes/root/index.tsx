import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './styles.module.scss';

const Root: FC = () => {
  return (
    <div className={styles.root}>
      <Header loggedIn={false} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};

export default Root;