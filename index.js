import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(st) {
  console.log("RENDER STATE", st);
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();

  addEventListeners(st);
}

// render(state.Home);

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
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

// axios
//   .request(options)
//   .then(function(response) {
//     state.Home.Sports = {};
//     state.Home.Sports.League = response.data.title;
//     state.Home.Sports.Type = response.data.group;
//     state.Home.Sports.description = response.data[0];
//     console.log(response.data);
//     done();
//   })
//   .catch(function(error) {
//     console.error(error);
//   });

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    if (view === "Events") {
      var options = {
        method: "GET",
        url: "https://odds.p.rapidapi.com/v4/sports",
        params: { all: "true" },
        headers: {
          "x-rapidapi-host": "odds.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.SPORTS_API_KEY}`
        }
      };

      axios.request(options).then(response => {
        console.log("RESPONSE", response);
        state.Sports.data = response.data;
        state.Sports.data.map(sport => {
          if (sport.key == "baseball_mlb") {
            state.Sports.mlb = sport;
          } else if (sport.key == "basketball_nba") {
            state.Sports.nba = sport;
          } else if (sport.key == "americanfootball_nfl_super_bowl_winner") {
            state.Sports.nfl = sport;
          }
        });
        // state.Sports.League = response.data.title;
        // state.Sports.Type = response.data.group;
        // state.Sports.description = response.data[0];
        console.log(response.data);
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
