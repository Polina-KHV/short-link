import { FC, useState} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { handleCreateLink } from '../../utils';
import { useActions } from '../../hooks/useActions';
import styles from './styles.module.scss';
import Loader from '../Loader';

interface ILinkForm {
  link: string,
}

const LinkForm: FC = () => {
  const [shortLink, setShortLink] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {setLinks} = useActions();
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ILinkForm>({});

  const onSubmit: SubmitHandler<ILinkForm> = (data) => {
    setLoading(true);
    handleCreateLink(data.link, setShortLink, reset, navigate, setLinks, setLoading)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.form__title}>Создайте свою короткую&nbsp;ссылку</h3>
      <input
        className={styles.form__input}
        type='text'
        placeholder='Введите ссылку'
        {...(register('link', {
          required: 'Заполните поле',
          pattern: {
            value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
            message: 'Введите валидную ссылку'
          }
        }))}
      />
      <span className={styles.form__error}>
        {errors?.link?.message}
      </span>
      <div className={styles.form__response}>
        { loading ? <Loader height='20' /> :
          <Link
            className={styles.form__link}
            to={shortLink}
            target='_blank'
          >
            {shortLink}
          </Link>
        }
      </div>
      <button className={styles.form__button}>Сократить</button>
    </form>
  )
};

export default LinkForm;