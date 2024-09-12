export function similliarCard(film) {
  const {
    nameRu,
    posterUrl,
    filmId,
  } = film;

  return `
  <div class="card">

  <a href = "/movies/${filmId}" class="wp-img">
    <img src=${posterUrl} alt=${nameRu} loading="lazy"/>
  </a>
  <div class="descr">
    <h2 class="title">${nameRu}</h2>
   </div>
  <a href='/movies/${filmId}' class="link">Подробнее...</a>
</div>`;
}

