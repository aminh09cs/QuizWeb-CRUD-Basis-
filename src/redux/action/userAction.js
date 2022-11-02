export const fetch_user_login = 'fetch_user_login';
export const doLogin = (data) => {
    return {
        type: fetch_user_login,
        payload: data //email, password
    }
}