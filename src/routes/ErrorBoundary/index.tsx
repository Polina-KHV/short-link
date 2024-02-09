import { FC } from 'react';
import styles from './styles.module.scss'

const ErrorBoundary: FC = () => {
  return (
    <section className={styles.error}>
      <h2 className={styles.error__title}>Что-то пошло не так :(</h2>
      <p className={styles.error__text}>Попробуйте обновить страницу</p>
      <p className={styles.error__text}>или вернитесь к сервису чуть позже</p>
      <div className={styles.error__figure}/>
    </section>
  )
};

export default ErrorBoundary;