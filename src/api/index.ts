import axios from 'axios';

const api = 'https://blindlight-srv.herokuapp.com';

async function getImageLabels(image: string) {
  return await axios.post('https://blindlight-srv.herokuapp.com/image/labels', {
    image,
  });
}

async function describeImage(image: string) {
  return await axios.post(
    'https://blindlight-srv.herokuapp.com/image/description',
    {
      image,
    },
  );
}

async function getImageText(image: string) {
  return await axios.post(`https://blindlight-srv.herokuapp.com/image/text`, {
    image,
  });
}

async function analyzeImage(model: {
  image: string;
  extract_labels?: boolean;
  extract_text?: boolean;
  generate_description?: boolean;
}) {
  return await axios.post(
    `https://blindlight-srv.herokuapp.com/image/analyze`,
    model,
  );
}

async function login(username: string, password: string) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  return axios.post(`${api}/users/login`, formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
}

async function get_nearby_places(lat: number, lon: number) {
  return axios.get(`${api}/places/nearbyplaces?lat=${lat}&lon=${lon}`);
}

export {
  login,
  getImageLabels,
  describeImage,
  getImageText,
  get_nearby_places,
  analyzeImage
};
