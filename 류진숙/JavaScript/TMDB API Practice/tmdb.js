const form = document.getElementById('form');
const movieInput = document.getElementById('movie-input');
const movieList = document.querySelector('.movie-list');
const API_KEY = 'bd811fbe5b564377261911e60b32d7ec';
const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&page=1&include_adult=false&query=`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

// json을 가져와야하는데 인풋에 값을 받은 다음 그 값을 URL + query 값으로 전달해서 받아야함
// tmdb에서 json 데이터를 가져오는 함수
async function getMovieData(value) {
  let response = await fetch(value);
  let moviesData = await response.json();
  movieArray(moviesData.results);
  console.log(moviesData.results);
}

function movieArray(movies) {
  movieList.innerHTML = '';
  movies.forEach((movie) => {
    const {title, poster_path, vote_average, overview, release_date} = movie;
    const posterUrl = IMG_URL + poster_path;
    const postArea = document.createElement('div');
    postArea.innerHTML = `
    <img class="poster-img" src="${posterUrl}" alt="${title}" />
    <div class="content-area">
    <p class="title">${title}</p>
    <p class="overview">${overview}</p>
    </div>`;
    
    movieList.appendChild(postArea);
  });
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputValue = movieInput.value;
  console.log(inputValue);
  if (inputValue && inputValue !== '') {
    getMovieData(url+inputValue);
    inputValue = '';
  } else {
    window.location.reload();
  }
});