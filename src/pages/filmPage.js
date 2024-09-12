import {apiKey, app, baseUrl, headers} from "../services/vars";
import {header} from "../common/header";
import {spinner, removeSpinner} from "../common/spinner.js";
import './filmPage.scss'
 import {similliarCard} from "../common/similiarCard.js";


export default function filmPage(auth) {

  const id = Number(window.location.pathname.split('/')[2])

  const getFilmById = async (id) => {
    spinner()
    const response = await fetch(`${baseUrl}/api/v2.2/films/${id}`, {
      method: "GET",
      headers
    })
    return await response.json()
  }

  const getFilmSimilars = async (id) => {

    const response = await fetch(`${baseUrl}/api/v2.2/films/${id}/similars`, {
      method: "GET",
      headers
    })
    return await response.json()
  }

  getFilmById(Number(id)).then((response) => {
    removeSpinner()
    header(true, auth);
    renderFilmPage(response)

    getFilmSimilars(id).then((result) => {
      renderSimilarFilms(result.items)
    })

  })


}


function renderSimilarFilms(films) {
  if(films.length > 0) {
    const filmsWrapper = `<div class="similiar-movies"><h2>Похожие фильмы</h2><div class = "film-list single-movie-similiars">${ renderSimilarCard(films)}</div></div>`
    app.insertAdjacentHTML('beforeend', filmsWrapper )
  }
}

function renderFilmPage(film) {
  const filmPage = `
<div class ="single-movie">

   <div class="head-row">
   <img src="${film.posterUrl}" width="240" height="460" alt="">
     <div class="caption">
        <h1>${film.nameRu}</h1> 
        <div class="content-wrap">
              <div class="content"><b>Краткое описание: </b> ${film.shortDescription ? film.shortDescription : 'Отсутствует'}</div>
               <div class="content"><b>Описание: </b> ${film.description}</div>
        </div>
  
        <div class="genres item">Жанры: ${film.genres.map((item, index, array) => index === array.length - 1 ? '<span>' + item.genre + ' </span>' : '<span>' + item.genre + '</span>').join()}</div>
        <div class="countries item">Страна: <span>${film.countries[0].country}</span></div>

        <div class="length item">Длина фильма: <span> ${film.filmLength} мин.</span></div>
        <div class="rating item">Рейтинг кинопоиск: <span>${film.ratingKinopoisk ? film.ratingKinopoisk : 'n/a'}</span></div>
      
  </div>
    </div>
  </div>
 
`
  app.insertAdjacentHTML('beforeend', filmPage)
}


function renderSimilarCard(films) {
  return films.length !== 0 ?  String(films.map((item) => similliarCard(item))).replaceAll(',', '') : [];

}