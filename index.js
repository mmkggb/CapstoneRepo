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
    .querySelector(".fa-baseball-ball")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hide--mobile")
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
        url: `${process.env.SPORTS_API_URL}`,
        params: { all: "true" },
        headers: {
          "x-rapidapi-host": "odds.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.SPORTS_API_KEY}`
        }
      };

      axios
        .get(
          `https://www.thesportsdb.com/api/v1/json/${process.env.LIVE_SPORTS_API_KEY}/eventsday.php?d=2022-03-31&s=Basketball&l=NBA`
        )
        .then(response => {
          console.log("RESPONSE", response);
          state.Sports.nba = response.data.events;
          // state.Sports.data.map(sport => {
          //   state.Sports.mlb = sport.strEvent;
          //   state.Sports.mlb = sport.dateEventLocal;
          // });
          console.log("This is nba: ", state.Sports.nba);


          // state.Sports.data.map(sport => {
          //   if (sport.key == "strSport") {
          //     state.Sports.mlb = sport;
          //   } else if (sport.key == "strEvent") {
          //     state.Sports.nba = sport;
          //   } else if (sport.key == "strTimestamp") {
          //     state.Sports.nfl = sport;
          //   }
          // });
          console.log(state.Sports.data);
          // console.log(response.data.events);
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
