import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '29655167-0362cdc5085e0df03dd8615c7',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safeSearch: 'true',
  page: 1,
  per_page: 12,
});

export const getImages = async query => {
  searchParams.set('q', query);
  searchParams.set('page', 1);
  const images = await axios
    .get(`${BASE_URL}?${searchParams}`)
    .then(r => r.data.hits);
  return images;
};

export const loadMore = async () => {
  const currentPage = Number(searchParams.get('page'));
  searchParams.set('page', currentPage + 1);
  const result = await axios
    .get(`${BASE_URL}?${searchParams}`)
    .then(r => r.data.hits);
  return result;
};
