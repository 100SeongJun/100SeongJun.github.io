import client from './client';
export const githubApi = (setState) => {
  client({
    url: `users/100Seongjun/repos`,
    method: 'get',
  }).then((res) => setState(res.data));
};
