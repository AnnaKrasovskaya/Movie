import firebaseConfig from "./firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {initializeApp} from "firebase/app";
import homePage from "./pages/homePage";
import registrPage from "./pages/auth/RegistrPage/RegistrPage";
import moviesPage from "./pages/moviesPage";
import errorPage from "./pages/errorPage";
import filmPage from "./pages/filmPage";
import loginPage from "./pages/auth/LoginPage/LoginPage";

initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {

  validateUrl(user);
  const arr = window.location.pathname.split("/");
  switch (window.location.pathname) {
    case "/":
      homePage(auth);
      break;
    case "/movies":
      moviesPage(auth);
      break;
    case "/login":
      loginPage(auth);
      break;
    case "/registration":
      registrPage(auth);
      break;
    case `/movies/${arr[2]}`:
      filmPage(auth, arr[2]);
      break;
    default:
      errorPage();
  }
});

function validateUrl(user) {
  if(!user) {
    if(window.location.pathname !== '/login' && window.location.pathname !== '/registration') {
      window.location.href = '/login'
    }
  }
}
