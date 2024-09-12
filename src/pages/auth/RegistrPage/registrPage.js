import { app } from "../../../services/vars";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function registrPage(auth) {
  app.innerHTML = `
  <div class="wrapper-form">
    <form name="Reg">
        <h1 name="title">Зарегистрируйте свой личный кабинет</h1>
        <h3 class="err none"> </h3>
        <div>
          <input type="email" placeholder = "email" name="email" />
        </div>
        <div>
        <input type="text" placeholder = "last name" name="lastName" />
        </div>
        <div>
        <input type="text" placeholder = "first name" name="firstName" />
        </div>
        <div>
          <input type="password" placeholder = "password" name="password" />
        </div>
        <div>
        <input type="password" placeholder = "confirm password" name="confirmPassword" />
      </div>
        <div class="wr_btn">
          <button id="btnSend" type="submit">Войти</button>
        </div>
        <a href="/login">Авторизоваться</a>
      </form>
      </div>`;
  const formReg = document.forms.Reg;
  const err = document.querySelector(".err");
  const { email, password, lastName, firstName, confirmPassword } = formReg;

  formReg.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      email.value === "" ||
      lastName.value === "" ||
      firstName.value === "" ||
      password.value === ""
    ) {
      err.innerHTML = "Заполните все поля";
      err.classList.remove("none");
      return;
    }
    if (confirmPassword.value.length < 7 || password.value.length < 7) {
      err.innerHTML = "Пароль должен быть не менее 7 символов";
      err.classList.remove("none");
      return;
    }
    if (password.value !== confirmPassword.value) {
      err.innerHTML = "Пароли не совпадают";
      err.classList.remove("none");
      return;
    }
    err.classList.add("none");
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        err.innerHTML = "Пользователь с таким email уже существует";
        err.classList.remove("none");
      });
  });
}
