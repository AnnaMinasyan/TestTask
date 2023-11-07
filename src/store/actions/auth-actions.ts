import { AuthTypes } from '../constants';

export const setIsLogined = (payload: boolean) => {
  return {
    type: AuthTypes.SET_IS_LOGINED,
    payload,
  };
};
export const changeIsLogined = (payload: boolean) => {  
  return {
    type: AuthTypes.CHANGE_IS_LOGINED,
    payload,
  };
};
export const setToken = (payload: string) => {  
  return {
    type: AuthTypes.SET_TOKEN,
    payload,
  };
};
export const addToken = (payload: string) => {  
  return {
    type: AuthTypes.ADD_TOKEN,
    payload,
  };
};