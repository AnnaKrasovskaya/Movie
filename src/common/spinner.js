import { app } from "../services/vars";
import "./spinner.scss";
export function spinner() {
  app.innerHTML = `<div class="wrapper-spinner">
  <div class="spinner"></div>
  <h2>Загрузка...</h2></div>`;
}

export function removeSpinner() {
  app.querySelector('.wrapper-spinner').remove()
}
