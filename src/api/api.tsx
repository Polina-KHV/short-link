import { IUser } from "../types/user.interface";

const BASE_URL = 'https://front-test.hex.team/api';

export async function signIn<T>(userData:IUser): Promise<T> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return await (res.ok ? res.json() : Promise.reject(res));
};

export async function signUp<T>(userData:IUser): Promise<T> {
  const res = await fetch(`${BASE_URL}/register?username=${userData.username}&password=${userData.password}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return await (res.ok ? res.json() : Promise.reject(res));
};

export async function getLinks<T>(): Promise<T> {
  const res = await fetch(`${BASE_URL}/statistics`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return await (res.ok ? res.json() : Promise.reject(res));
};

export async function createLink<T>(link:string): Promise<T> {
  const res = await fetch(`${BASE_URL}/squeeze?link=${link}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return await (res.ok ? res.json() : Promise.reject(res));
};