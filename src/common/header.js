import {app} from "../services/vars";
import {exitProfileUser} from "./exitProfileUser";
import logo from "../../assets/logo.png";

export function header(paste, auth) {
  const template = `
    <header id="header">
    <div class="logotip-wrap">
      <a href ="/" class="logotip"><img src="${logo}" alt="" /></a>
      <div class="interface">
        <nav>
          <a id="home-link" href="/">Главная</a>
          <a href="/filterby/1">Триллеры</a>
          <a href="/filterby/4">Мелодрама</a>
          <a href="/filterby/31">Игра</a>
        </nav>      
      </div>
    </div>

    <div class="profile">Выйти</div>
  </header>`;

  if (paste) {
    app.insertAdjacentHTML("afterbegin", template);
    const profile = document.querySelector(".profile");
    profile.addEventListener("click", () => exitProfileUser(auth));
  }
}
