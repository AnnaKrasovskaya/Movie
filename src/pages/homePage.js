import {app} from "../services/vars";
import {header} from "../common/header";
import {spinner} from "../common/spinner";
import kinopoisk from "../services/kinopoisk";
import {cardFilm} from "../common/cardFilm";
import previewFilm from "../common/previewFilm.js";
import "./homePage.scss";


export default function homePage(auth) {
  spinner();
  kinopoisk.getMoviePopular().then((data) => {
    const arrFilms = data.items;
    renderHomePage(arrFilms, auth);
  });

}

function renderHomePage(data, auth) {
  app.innerHTML = "";
  header(true, auth);

  app.insertAdjacentHTML(
    "beforeend",
    `
    <div class="wr-home">
        <div class="search-wrap">
          <form class="search-form">
            <input type="text" name="search" placeholder="Найти кино...">
            <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            </button>
        </form>
        <div class="search-preview"></div>
      </div>
    </div>
      <div class="film-list"> 
        ${renderCardFilm(data)}
    </div>
  `
  );
  const form = document.querySelector('.search-form')
  const {search} = form.elements;
  const filmList = document.querySelector(".film-list");
  const searchPreview = document.querySelector('.search-preview')

  form.elements.search.addEventListener('input', (e) => {

    if (e.target.value.length !== 0) {
      const previewSearch = searchFilm(e.target.value, data)
      searchPreview.innerHTML = ''
      searchPreview.classList.add('active')
      if (previewSearch.length > 0) {
        searchPreview.insertAdjacentHTML('beforeend', renderPreviews(previewSearch) )
      } else {
        searchPreview.insertAdjacentHTML('beforeend', renderNotFound(e.target.value) )
      }
    } else {
      searchPreview.classList.remove('active')
      searchPreview.innerHTML = ''
    }

  })

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    filmList.innerHTML = ''
    searchPreview.innerHTML = ''
    searchPreview.classList.remove('active')
    const films = searchFilm(search.value, data);
    filmList.insertAdjacentHTML("beforeend", renderCardFilm(films));

  });
}


function searchFilm(string, arr) {
  return arr.filter((item) => {
    return item.nameRu.toLowerCase().startsWith(string.toLowerCase());
  });

}



/**
 * Рендер превью и карточек
 * Заменим запятые для грида
 * @param films
 * @returns {string|*[]}
 */
function renderPreviews(films) {
  return films.length !== 0 ?  String(films.map((item) => previewFilm(item))).replaceAll(',', '') : [];
}
function renderCardFilm(films) {

  return films.length !== 0 ?  String(films.map((item) => cardFilm(item))).replaceAll(',', '') : [];
}
// Рендер не найдено
function renderNotFound(query) {
  return `<div class = "not-found">Извините, ничего не нашли по запросу:  <i>${query}</i></div>`
}

export {renderCardFilm}