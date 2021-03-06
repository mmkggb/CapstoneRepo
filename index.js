import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();
const router = new Navigo("/");

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();

  addEventListeners(st);
}

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(st[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-baseball-ball")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hide--mobile")
    );
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    if (view === "Events") {
      axios
        .get(
          `https://www.thesportsdb.com/api/v1/json/${process.env.LIVE_SPORTS_API_KEY}/eventsday.php?d=2022-05-22&s=Basketball&l=NBA`
        )
        .then(response => {
          state.Events.nba = response.data.events;

          done();
        });
      axios
        .get(
          `https://www.thesportsdb.com/api/v1/json/${process.env.LIVE_SPORTS_API_KEY}/eventsday.php?d=2022-05-22&s=Baseball&l=MLB`
        )
        .then(response => {
          console.log("RESPONSE MLB", response);
          state.Events.mlb = response.data.events;

          done();
        });
      axios
        .get(
          `https://www.thesportsdb.com/api/v1/json/${process.env.LIVE_SPORTS_API_KEY}/eventsday.php?d=2021-11-21&s=Football&l=NFL`
        )
        .then(response => {
          console.log("RESPONSE NFL", response);
          state.Events.nfl = response.data.events;

          done();
        });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":view": params => {
      console.log(params);
      let view = capitalize(params.data.view);
      render(state[view]);
    }
  })
  .resolve();
