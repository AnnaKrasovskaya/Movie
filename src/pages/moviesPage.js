import { app } from "../services/vars";
import { header } from "../common/header";
export default function MoviesPage(auth) {
  header(true, auth);
  app.insertAdjacentHTML("beforeend", `<h1>Movies</h1>`);
}
