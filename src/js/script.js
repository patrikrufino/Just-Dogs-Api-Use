const BASE_URL = 'https://api.thedogapi.com/v1/images/search';
const dogBtn = document.getElementById('change-dog');
const dogImg = document.getElementById('dog');

const getDogs = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json[0].url;
    } catch (error) {
        console.log(error.message);
    }
}

const loadImg = async () => {
    dogImg.src = await getDogs();
}

dogBtn.addEventListener('click', loadImg)

loadImg();