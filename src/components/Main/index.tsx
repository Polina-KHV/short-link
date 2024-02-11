import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkTable from '../LinkTable';
import LinkForm from '../LinkForm';
import { getAuthData } from '../../utils';
import { useActions } from '../../hooks/useActions';
import styles from './styles.module.scss';
import Loader from '../Loader';

const Main: FC = () => {
  const navigate = useNavigate();
  const {setLinks} = useActions();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuthData(navigate, setLinks, setLoading)
  },[]); // eslint-disable-line

  return (
    <>
    {loading ? <Loader height='300' /> :
      <section className={styles.main}>
        <LinkForm />
        <LinkTable />
      </section>
    }
  </>
  )
};

export default Main;