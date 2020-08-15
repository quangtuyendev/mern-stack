import * as types from './types';

export function signin(userInfo) {
    return ({
        type: types.AUTH_SIGNIN,
        payload: userInfo
    })
}

export function signout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return ({
        type: types.AUTH_SIGNOUT,
    })
}