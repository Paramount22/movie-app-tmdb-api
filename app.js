'use strict';

// vars
let page = 1;
//const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8335b966aa0001f618384081f205b83d&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=8335b966aa0001f618384081f205b83d&query="';

const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');
const loading = document.querySelector('.loader');

let genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

//Functions

// get movies from API
const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8335b966aa0001f618384081f205b83d&page=${page}`
  );
  const data = await response.json();

  return data.results;
};

// get searched movies from API an show them
const getMoviesBySearched = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  main.innerHTML = '';
  if (data.results.length === 0) {
    main.innerHTML = `<h2 class="no-results">No results</h2>`;
  } else {
    return data.results.forEach((movie) => {
      const {
        id,
        title,
        overview,
        vote_average,
        poster_path,
        release_date,
        original_language,
        genre_ids,
      } = movie;

      let modifiedGenres = genre_ids.map((id) => {
        if (id == 28) {
          return (id = 'Action');
        }

        if (id == 12) {
          return (id = 'Adventure');
        }
        if (id == 16) {
          return (id = 'Animation');
        }
        if (id == 35) {
          return (id = 'Comedy');
        }
        if (id == 80) {
          return (id = 'Crime');
        }
        if (id == 99) {
          return (id = 'Documentary');
        }
        if (id == 18) {
          return (id = 'Drama');
        }
        if (id == 10751) {
          return (id = 'Family');
        }
        if (id == 14) {
          return (id = 'Fantasy');
        }
        if (id == 36) {
          return (id = 'History');
        }
        if (id == 27) {
          return (id = 'Horror');
        }
        if (id == 10402) {
          return (id = 'Music');
        }
        if (id == 9648) {
          return (id = 'Mystery');
        }
        if (id == 10749) {
          return (id = 'Romance');
        }
        if (id == 878) {
          return (id = 'Science Fiction');
        }
        if (id == 10770) {
          return (id = 'TV Movie');
        }
        if (id == 53) {
          return (id = 'Thriller');
        }

        if (id == 10752) {
          return (id = 'War');
        }
        if (id == 37) {
          return (id = 'Western');
        }
      });

      console.log(modifiedGenres);

      const movieEL = document.createElement('div');
      movieEL.setAttribute('id', `movie-${id}`);
      movieEL.classList.add('movie');

      movieEL.innerHTML = `
    
    <img
      src="${IMG_PATH}${poster_path}"
      alt="${title}"
    />
    <div class="movie-info-1">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>

    <div class="movie-info-2">
      <p>${setDate(release_date)}</p>
      <p>${original_language.toUpperCase()}</p>      
    </div>

    <div class="genres">
      <p>${modifiedGenres}</p> 
    </div>

    <div class="overview">
      <h3>${title}</h3>
      <p>
        ${overview}
      </p>
    </div>
  
    `;

      main.appendChild(movieEL);
    });
  }
};

// show movies in DOM
const showMovies = async () => {
  const movies = await getMovies();

  movies.forEach((movie) => {
    const {
      id,
      title,
      overview,
      vote_average,
      poster_path,
      release_date,
      original_language,
      genre_ids,
    } = movie;

    let modifiedGenres = genre_ids.map((id) => {
      if (id == 28) {
        return (id = 'Action');
      }

      if (id == 12) {
        return (id = 'Adventure');
      }
      if (id == 16) {
        return (id = 'Animation');
      }
      if (id == 35) {
        return (id = 'Comedy');
      }
      if (id == 80) {
        return (id = 'Crime');
      }
      if (id == 99) {
        return (id = 'Documentary');
      }
      if (id == 18) {
        return (id = 'Drama');
      }
      if (id == 10751) {
        return (id = 'Family');
      }
      if (id == 14) {
        return (id = 'Fantasy');
      }
      if (id == 36) {
        return (id = 'History');
      }
      if (id == 27) {
        return (id = 'Horror');
      }
      if (id == 10402) {
        return (id = 'Music');
      }
      if (id == 9648) {
        return (id = 'Mystery');
      }
      if (id == 10749) {
        return (id = 'Romance');
      }
      if (id == 878) {
        return (id = 'Science Fiction');
      }
      if (id == 10770) {
        return (id = 'TV Movie');
      }
      if (id == 53) {
        return (id = 'Thriller');
      }

      if (id == 10752) {
        return (id = 'War');
      }
      if (id == 37) {
        return (id = 'Western');
      }
    });

    modifiedGenres = modifiedGenres.join(', ');

    const movieEL = document.createElement('div');
    movieEL.setAttribute('id', `movie-${id}`);
    movieEL.classList.add('movie');

    const genres = document.createElement('div');
    genres.classList.add('genres');

    movieEL.innerHTML = `
    
    <img
      src="${IMG_PATH}${poster_path}"
      alt="${title}"
    />
    <div class="movie-info-1">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>

    <div class="movie-info-2">      
      <p>${setDate(release_date)}</p>
      <p>${original_language.toUpperCase()}</p>
    </div>

    <div class="genres"> 
      <p>${modifiedGenres}</p>       
    </div>

    <div class="overview">
      <h3>${title}</h3>
      <p>
        ${overview}
      </p>
    </div>
  
    `;

    main.appendChild(movieEL);
  });
};

// Date format
const setDate = (date) => {
  return date.slice(0, 4);
};

/*const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};*/

// colors of votes
const getClassByRate = (vote) => {
  if (vote >= 7.5) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else if (vote > 0) {
    return 'red';
  }
};

// validation search input + show serched movie
const getSearchedMovies = (e) => {
  e.preventDefault();

  if (search.value && search.value !== '') {
    getMoviesBySearched(SEARCH_API + search.value);

    search.value = '';
  } else {
    window.location.reload();
  }
};

// get document height
const getDocumentHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
};

// scroll end of the page then show loading icon + next movies
const scrollPage = () => {
  const { scrollTop, clientHeight } = document.documentElement; // destructuring

  if (scrollTop + clientHeight == getDocumentHeight()) {
    showLoading();
  }
};

// show loader and fetch more posts
const showLoading = () => {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');
    setTimeout(() => {
      page++;

      showMovies();
    });
  }, 1000);
};

// Listeners
window.addEventListener('DOMContentLoaded', showMovies);
window.addEventListener('scroll', scrollPage);
form.addEventListener('submit', getSearchedMovies);
