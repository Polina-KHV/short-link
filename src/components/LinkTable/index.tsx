import { FC, useEffect, useLayoutEffect, useState } from 'react';
import LinkCard from '../LinkCard';
import styles from './styles.module.scss';
import { ILink } from '../../types/link.interface';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { useActions } from '../../hooks/useActions';
import { handleSortLinks } from '../../utils';
import Loader from '../Loader';

const LinkTable: FC = () => {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(Number);
  const [sortButtonName, setSortButtonName] = useState('Сортировать');
  const [noLinks, setNoLinks] = useState('noData');
  const arrows = String.fromCharCode(8645);
  const {sortLinks} = useActions();
  const links = useSelector((state:any) => state.links.links);
  const [allLinksVisible, setAllLinksVisible] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState([]);

  useEffect(() => {
    
    setVisibleLinks(links.slice(0, 10));
    if(links.length === 0) {setNoLinks('noLinks')}
    else {setNoLinks('links')}
  }, [links]) //eslint-disable-line

  useEffect(() => {
    if(visibleLinks.length === links.length) {setAllLinksVisible(true)}
    else {setAllLinksVisible(false)}
    setLoading(false);
  }, [visibleLinks]) //eslint-disable-line

  function addVisibleLinks() {
    setVisibleLinks((state:any) =>
      state.concat(links.slice(state.length, state.length + 10)
    ))
  }

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  useEffect(() => {
    if(width <= 600) {
      setSortButtonName(arrows);
    } else {
      setSortButtonName('Сортировать');
    }
  }, [width]); // eslint-disable-line

  return (
    <>
      {loading ? <Loader height='300' />
      : noLinks === 'noLinks' ?
        <h3 className={styles['empty-message']}>Пока нет созданных ссылок</h3>
      : 
        <section className={styles['links-table']}>
          <div className={styles.header}>
            <h2 className={styles.title}>Таблица ссылок</h2>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle className={styles.dropdown__toggle} id="dropdown">
                {sortButtonName}
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.dropdown__menu}>
                <Dropdown.Item
                  className={styles.dropdown__item}
                  onClick={() => handleSortLinks('mostPopular', sortLinks)}
                >
                  По популярности &#8593;
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.dropdown__item}
                  onClick={() => handleSortLinks('lessPopular', sortLinks)}
                >
                  По популярности &#8595;
                </Dropdown.Item>
                <Dropdown.Item
                  className={styles.dropdown__item}
                  onClick={() => handleSortLinks('lexical', sortLinks)}
                >
                  По названию
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.table}>
            <LinkCard
              shortTitle='Короткая ссылка'
              targetTitle='Основная ссылка'
              counterTitle='Клики'
              />
            {visibleLinks.map((link:ILink) => 
              <LinkCard
              key={link.id}
              short={link.short}
              target={link.target}
              counter={link.counter}
              />
            )}
          </div>
          {!allLinksVisible &&
            <button
              className={styles.button}
              onClick={() => addVisibleLinks()}
            >
              Показать еще
            </button>
          }
        </section>
      }
    </>
  )
};

export default LinkTable;