export default function (film) {
  const { posterUrl, nameRu, kinopoiskId } = film;

  return `
  <div class = "search-film-preview">
    <a href = "/movies/${kinopoiskId}" class="preview">
        <img src="${posterUrl}" width="32" height="32" alt="">
    </a>
    <span class="name">${nameRu}</span>
  </div>
  `;
}
