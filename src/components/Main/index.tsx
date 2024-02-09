import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkTable from '../LinkTable';
import LinkForm from '../LinkForm';
import { getAuthData } from '../../utils';
import { useActions } from '../../hooks/useActions';
import styles from './styles.module.scss';


const Main: FC = () => {
  const navigate = useNavigate();
  const {setLinks} = useActions();

  useEffect(() => {
    getAuthData(navigate, setLinks)
  },[]); // eslint-disable-line

  return (
    <section className={styles.main}>
      <LinkForm />
      <LinkTable />
    </section>
  )
};

export default Main;