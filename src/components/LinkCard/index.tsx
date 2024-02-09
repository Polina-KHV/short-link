import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ILinkData } from '../../types/link.interface';
import styles from './styles.module.scss';
import { useActions } from '../../hooks/useActions';
import { handleLinkClick } from '../../utils';


const LinkCard: FC<ILinkData> = ({short, shortTitle, target, targetTitle, counter, counterTitle}) => {
  const [clicks, setClicks] = useState(Number(counter));
  const {setLinkClick} = useActions();

  return (
    <div className={styles.card}>
      <div className={styles.card__cell}>
        {short ?
          <Link
            className={styles.card__link}
            to={`https://front-test.hex.team/s/${short}`}
            target='_blank'
            onClick={() => handleLinkClick(setClicks, setLinkClick, short)}
          >
            {short}
          </Link>
          :
          <p className={styles.card__title}>{shortTitle}</p>
        }
      </div>
      <div className={styles.card__cell}>
        {target ?
          <Link
            className={styles.card__link}
            to={target}
            target='_blank'
          >
            {target}
          </Link>
          :
          <p className={styles.card__title}>{targetTitle}</p>
        }
      </div>
      <div className={styles.card__cell}>
        {!counterTitle ? clicks : 
          <p className={styles.card__title}>{counterTitle}</p>
        }
      </div>
    </div>
  )
};

export default LinkCard;