import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


const Footer: FC = () => {  
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Link to='https://github.com/Polina-KHV' className={styles.footer__link} target='_blank'>
          &copy;&nbsp;Polina-KHV
        </Link>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
};

export default Footer;