import { app } from "../../../services/vars";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../Auth.scss";

export default function loginPage(auth) {
  const formLoginTemplate = `
  <div class="wrapper-form">
    <form name="login">
        <h1 name="title">Войдите в кабинет</h1>
        <h3 class="err none"> </h3>
        <div>
          <input type="email" placeholder = "email" name="email" />
        </div>
        <div>
          <input type="password" placeholder = "password" name="password" />
        </div>
        <div class="wr_btn">
          <button id="btnSend" type="submit">Войти</button>
        </div>
        <a href="/registration">Зарегистрироваться</a>
      </form>
      </div>`;

  app.innerHTML = formLoginTemplate;
  const formLogin = document.forms.login;
  const err = document.querySelector(".err");
  const { email, password } = formLogin;

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value == "" || password.value == "") {
      err.classList.remove("none");
      err.textContent = "Заполните все поля";
      return;
    }
    err.classList.add("none");
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        window.location.pathname = "/";
      })
      .catch((errText) => {
        console.error(errText);
        err.classList.remove("none");
        err.textContent = "Не верный логин или пароль";
      });
  });
}
