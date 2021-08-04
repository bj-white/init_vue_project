import request from '../util/request.js';

export function getTest () {
  return request({
    url: '/api/getUser',
  });
}
