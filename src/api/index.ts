import axios from 'axios';

const api = 'https://blindlight-srv.herokuapp.com';

async function getImageLabels(image: string) {
  return await axios.post(
    'https://blindlight-srv.herokuapp.com/image/labels',
    { image },
  );
}

async function describeImage(image: string) {
  return await axios.post('https://blindlight-srv.herokuapp.com/image/description', {
    image,
  });
}

async function getImageText(image: string) {
  return await axios.post(`https://blindlight-srv.herokuapp.com/image/text`, {
    image,
  });
}

async function login(username: string, password: string) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  return axios.post(`${api}/users/login`, formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
}

export { login, getImageLabels, describeImage, getImageText };
