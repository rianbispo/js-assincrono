const BASE_URL = 'https://random.imagecdn.app/500/150';
const imagesBtn = document.getElementById('change-image');
const imagesImg = document.getElementById('image');

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const result = await data;
    return result.url;

  } catch (error) {
    console.log(error)
  }
}

const loadImg = async () => {
  imagesImg.src = await getCats()
}

imagesBtn.addEventListener('click', loadImg);

loadImg()