import api from '../utils/api';

export async function login(payload) {
  return api.post('login', {
    data: payload
  });
};

export async function testPrivateApiCall(token) {
  return api.get('privateApi', {
    headers: {
      Authorization: `Bearer ${toke}`
    }
  });
} 