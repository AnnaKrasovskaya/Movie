import {app, baseUrl, headers} from "../services/vars";
import {header} from "../common/header";
import {spinner, removeSpinner} from "../common/spinner.js";
import "./filmPage.scss";
import {renderCardFilm} from "./homePage.js";

import {renderFilter} from "./homePage.js";
import {footer} from "../common/footer.js";


const getFilmsById = async (id) => {
  spinner();
  const response = await fetch(`${baseUrl}/api/v2.2/films?genres=${id}`, {
    method: "GET",
    headers,
  });
  return await response.json();
}

export default function (auth, id) {

  getFilmsById(id).then((response) => {
    removeSpinner()
    header(true, auth)

    const films = `
    <section class = "films__wrapper">
          <h2>Фильтр</h2>
          <div id = "filter__list"></div> 
    </section>

<section class = "films__wrapper">
      <div class="film-list"> 
       ${response.items.length !== 0 ? renderCardFilm(response.items) : 'Извините но фильмов не найдено'}
      </div>
    </section>`

    app.insertAdjacentHTML('beforeend', films)
    renderFilter(id)
    footer(auth)


  })

}

