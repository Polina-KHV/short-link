import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleSignIn, handleSignUp } from '../../utils';
import { IUser } from '../../types/user.interface';
import { useActions } from '../../hooks/useActions';

interface IEnterForm {
  formTitle: string,
  buttonText: string
}

const EnterForm: FC<IEnterForm> = ({formTitle, buttonText}) => {
  const [errorMessage, setErrorMessage] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const {logIn} = useActions();
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IUser>({});

  const onSubmit: SubmitHandler<IUser> = (user) => {
    if(location.pathname.endsWith('/signin')) {
      handleSignIn(user, reset, navigate, logIn, setErrorMessage)
    } else {
      handleSignUp(user, reset, navigate, setErrorMessage)
    }
  };

  useEffect(() => {
    reset();
    setErrorMessage('');
  }, [location, reset])

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.form__subtitle}>Чтобы воспользоваться сервисом,</h3>
      <h2 className={styles.form__title}>{formTitle}</h2>
      <input
        className={styles.form__input}
        type='text'
        placeholder='Введите имя'
        {...(register('username', {
          required: 'Заполните поле',
        }))}
      />
      <span className={styles.form__error}>
        {errors?.username?.message}
      </span>
      <input
        className={styles.form__input}
        type='text'
        placeholder='Введите пароль'
        {...(register('password', {
          required: 'Заполните поле',
        }))}
      />
      <span className={styles.form__error}>
        {errors?.username?.message}
      </span>
      <button className={styles.form__button}>{buttonText}</button>
      <span className={`${styles.form__error} ${styles['form__server-error'] }`}>
        {errorMessage}
      </span>
    </form>
  )
};

export default EnterForm;