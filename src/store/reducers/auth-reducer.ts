import { AuthTypes } from '../constants';
interface IReduxAction<T> {
    type: T;
    payload: any;
}
export interface IAuthState {
    islogined: boolean;
    token?:string
}
export const initialState: IAuthState = {
  islogined:false
}
const authReducer = (state = initialState, action: IReduxAction<AuthTypes>) => {

    switch (action.type) {
        case AuthTypes.SET_IS_LOGINED:
            return {
                ...state,
                islogined: action.payload
            };
            case AuthTypes.SET_TOKEN:
              return {
                  ...state,
                  token: action.payload
              };
        default:
            return state;
    }
}
export default authReducer;