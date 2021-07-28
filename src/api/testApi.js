import request from '../util/request.js';

export function getTest (id) {
  return request({
    url: '',
    method: 'get',
    params: {
      id
    }
  });
}
