
export function cardFilm(film) {
  const {
    posterUrl,
    premiereRu,
    nameRu,
    nameEn,
    genres,
    countries,
    kinopoiskId,
  } = film;

  return `
  <div class="card">

  <a href = '/movies/${kinopoiskId}' class="wp-img">
    <img src=${posterUrl} alt=${nameEn} loading="lazy"/>
  </a>
  <div class="descr">
    <h2 class="title">${nameRu}</h2>
    <h3 class="premiereRu">Премьера: ${premiereRu}</h3>
    <div class="genres">Жанры: ${genres.map((item, index, array) => index === array.length - 1 ? '<span>' + item.genre + '</span>' : '<span>' + item.genre +  ',</span> ').join() }</div>
    <div class="countries">Страна: ${countries[0].country}</div>
  </div>
  <a href='/movies/${kinopoiskId}' class="link">Подробнее...</a>
</div>`;
}
