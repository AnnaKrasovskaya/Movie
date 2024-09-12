import { app } from "../services/vars";

export default function errorPage() {
  app.innerHTML = `<h1>Error page</h1>`;
}
