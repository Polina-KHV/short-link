/* eslint-disable eqeqeq */
import { createLink, getLinks, signIn, signUp } from "../api/api";
import { IUser } from "../types/user.interface";

function handleSignUp(
    user:IUser,
    reset:Function,
    navigate:Function,
    setErrorMessage:Function
  ) {
  signUp(user)
  .then(() => {
    reset();
    navigate('/signin', {replace: true})
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
    if(err.status == 400){
      setErrorMessage('Пользователь с таким именем уже существует');
    }
  })
};

function handleSignIn(
  user:IUser,
  reset:Function,
  navigate:Function,
  logIn:Function,
  setErrorMessage:Function
) {
  signIn(user)
  .then((res:any) => {
    logIn(res.access_token);
    localStorage.setItem('token', res.access_token);
    reset();
    navigate('/', {replace: true})
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
    if(err.status == 400){
      setErrorMessage('Неверное имя или пароль');
    }
  })
};

function handleLogOut(logOut:Function) {
  logOut();
  localStorage.clear();
}

function getAuthData(navigate:Function, setLinks:Function) {
  getLinks()
  .then((res:any) => {
    setLinks(res);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
    localStorage.clear();
    navigate('/signin', {replace: true})
  })
}

function handleCreateLink(
  link:string,
  setShortLink:Function,
  reset:Function,
  navigate:Function,
  setLinks:Function
) {
  createLink(link)
  .then((res:any) => {
    setShortLink(`https://front-test.hex.team/s/${res.short}`);
    reset();
    })
  .then(() => {
    getAuthData(navigate, setLinks)
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
  })
}

function handleLinkClick(setClicks:Function, setLinkClick:Function, short:string) {
  setClicks((state:number) => state + 1);
  setLinkClick(short)
}

function handleSortLinks(filter:string, sortLinks:Function) {
  sortLinks(filter);
}

export {
  handleSignUp,
  handleSignIn,
  handleLogOut,
  getAuthData,
  handleCreateLink,
  handleLinkClick,
  handleSortLinks
};