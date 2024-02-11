import { FC } from 'react';
import { ThreeDots } from "react-loader-spinner";
import styles from './styles.module.scss';

interface ILoader {
  height: string
}

const Loader: FC<ILoader> = ({height}) => {
  return (
    <div className={styles.loader}>
      <ThreeDots width='60' height={height} color='var(--green)'/>
    </div>
  )
};

export default Loader;