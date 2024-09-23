import {app} from "../services/vars";

import logo from "../../assets/logo.png";
import appgallery from "../../assets/appgallery.svg";
import appstore from "../../assets/appstore.svg";
import gplay from "../../assets/gplay.svg";
import rustore from "../../assets/roostore.svg";
import vk from "../../assets/vk.svg";
import twitter from "../../assets/twitter.svg";
import tg from "../../assets/tg.svg";
import youtube from "../../assets/youtube.svg";

export function footer(auth) {
  const template = `
    <footer id="footer">
    <div class="logotip-wrap">
      <a href ="/" class="logotip"><img src="${logo}" alt="" /></a> 
    </div>
    <nav> 
        <a href="/">Главная</a>    
          <a href="/filterby/1">Триллеры</a>
          <a href="/filterby/4">Мелодрама</a>
          <a href="/filterby/31">Игра</a>
    </nav>  

    <div class = "apps">
        <div class = "title">Скачайте приложение: </div>
       
        <img src = "${appstore}" width = "140" height = "40"/>
        <img src = "${gplay}" width = "140" height = "40"/>
        <img src = "${appgallery}" width = "140" height = "40"/>
        <img src = "${rustore}" width = "140" height = "40"/>
 
 </div>
  <div class = "socials">
        <div class = "title">Наши соцсети:</div>
      
        <img src = "${vk}" width = "32" height = "32"/>
        <img src = "${twitter}" width = "32" height = "32"/>
        <img src = "${tg}" width = "32" height = "32"/>
        <img src = "${youtube}" width = "32" height = "32"/> 
  </div>
     

  </footer>`;
  console.log(auth);

  if (auth) {
    app.insertAdjacentHTML("beforeend", template);
  }
}
