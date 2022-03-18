// 3-18-22 @ 2:40pm old remote repo code
// import { Header, Nav, Main, Footer } from "./components";
// import * as state from "./store";
// import Navigo from "navigo";
// import { capitalize } from "lodash";
// import axios from "axios";

// const router = new Navigo("/");

// function render(st) {
//   document.querySelector("#root").innerHTML = `
//     ${Header(st)}
//     ${Nav(state.Links)}
//     ${Main(st)}
//     ${Footer()}
//   `;
//   router.updatePageLinks();

//   addEventListeners(st);
// }

// // render(state.Home);

// function addEventListeners(st) {
//   // add event listeners to Nav items for navigation
//   document.querySelectorAll("nav a").forEach(navLink =>
//     navLink.addEventListener("click", event => {
//       event.preventDefault();
//       render(st[event.target.title]);
//     })
//   );

//   // add menu toggle to bars icon in nav bar
//   document
//     .querySelector(".fa-bars")
//     .addEventListener("click", () =>
//       document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//     );
// }

// // var axios = require("axios").default;
// var options = {
//   method: "GET",
//   url: "https://odds.p.rapidapi.com/v4/sports",
//   params: { all: "true" },
//   headers: {
//     "x-rapidapi-host": "odds.p.rapidapi.com",
//     "x-rapidapi-key": `${process.env.SPORTS_API_KEY}`
//   }
// };

// axios
//   .request(options)
//   .then(function(response) {
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });

// router
//   .on({
//     "/": () => render(state.Home),
//     ":view": params => {
//       console.log(params);
//       let view = capitalize(params.data.view);
//       render(state[view]);
//     }
//   })
//   .resolve();
