import {IAuthState} from '../reducers/auth-reducer';
export const isloginedSelector = ({
  authReducer: {islogined},
}: {
  authReducer: IAuthState;
}) => islogined;
export const tokenSelector = ({
  authReducer: {token},
}: {
  authReducer: IAuthState;
}) => token;