import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import { useActions } from '../../hooks/useActions';
import styles from './styles.module.scss';
import { handleLogOut } from '../../utils';

interface IHeader {
	loggedIn: boolean;
};

const Header: FC<IHeader> = () => {
  const location = useLocation();
  const {logOut} = useActions();
  const [navLink, setNavLink] = useState({text:'', path:'', onClick: () => {}});

  useEffect(() => {
    if(location.pathname.endsWith('/signin')) {
      setNavLink({text:'Зарегистрироваться', path:'/signup', onClick: () => {}})
    }
    else if(location.pathname.endsWith('/signup')) {
      setNavLink({text:'Войти', path:'/signin', onClick: () => {}})
    }
    else {
      setNavLink({
        text:'Выйти',
        path:'/signin',
        onClick: () => {handleLogOut(logOut)}
      })
    }
  },[location, logOut])

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo/> 
        <Link
          className={styles.header__link}
          to={navLink.path}
          onClick={navLink.onClick}
        >
          {navLink.text}
        </Link>
      </div>
    </header>
  )
};

export default Header;