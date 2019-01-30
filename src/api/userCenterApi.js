import * as http from '../common/http';

const base = '/api/usercenter-war';

export function login(username, password) {
  return http.post({
    url: `${base}/user/login`,
    data: {
      username: username,
      password: password
    }
  });
}

export function logout() {
  return http.post({
    url: `${base}/user/logout`
  });
}

export function getAllCustomer() {
  return http.get({
    url: `${base}/customer/localCustomers`
  });
}
