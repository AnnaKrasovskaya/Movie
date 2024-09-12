import { signOut } from "firebase/auth";

export function exitProfileUser(auth) {
  signOut(auth)
    .then(() => {
      window.location.pathname = "/login";
    })
    .catch((err) => {
      console.log(err);
    });
}
