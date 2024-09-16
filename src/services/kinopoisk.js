/**
 * https://kinopoiskapiunofficial.tech/documentation/api/#/films/get_api_v2_2_films__id_
 */
import { baseUrl, headers } from "./vars.js";

export default class kinopoisk {
  static async getMoviePopular() {
    try {
      const response = await fetch(
        `${baseUrl}/api/v2.2/films/premieres?year=2024&month=JANUARY`,
        {
          method: "GET",
          headers,
        }
      );
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}
