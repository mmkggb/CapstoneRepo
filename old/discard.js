router.hooks({
  before: (done, params) => {
    const page =
      params && params.data && params.data.page
        ? capitalize(params.data.page)
        : "Home";

    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=st.%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
        )
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
    } else if (page === "Pizza") {
      axios
        .get(`${process.env.PIZZA_PLACE_API_URL}`)
        .then(response => {
          console.log(response.data);
          state.Pizza.pizzas = response.data;
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    } else {
      done();
    }
  }
});

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://odds.p.rapidapi.com/v4/sports',
  params: {all: 'true'},
  headers: {
    'x-rapidapi-host': 'odds.p.rapidapi.com',
    'x-rapidapi-key': '61a3417efamsh1329a53d3b839b1p1471f7jsnf9a2cecae88b'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
.get(
  `https://api.openweathermap.org/data/2.5/weather?q=st.%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
)
router.hooks({
  before: (done, params) => {
    const page =
      params && params.data && params.data.page
        ? capitalize(params.data.page)
        : "Home";

    if (page === "Home") {
      axios
      .request(options)
      .then(function(response) {
        state.Home.Sports = {};
        state.Home.Sports.League = response.data.title;
        state.Home.Sports.Type = response.data.group;
        state.Home.Sports.description = response.data[0];
        console.log(response.data);
        done();
      })
      .catch(function(error) {
        console.error(error);
      });
    }
  }
})

${Sports_API_URL}=
.get(
     `${Sports_API_URL}=${process.env.SPORTS_API_KEY}`
)

//  <table id="pizzas">
//     <tr>
//       <th>Crust</th>
//       <th>Cheese</th>
//       <th>Sauce</th>
//       <th>Toppings</th>
//       <th>Customer</th>
//     </tr>
//     ${st.pizzas
//       .map(pizza => {
//         return `<tr><td>${pizza.crust}</td><td>${pizza.cheese}</td><td>${
//           pizza.sauce
//         }</td><td>${pizza.toppings.join(" & ")}</td><td>${
//           pizza.customer
//         }</td></tr>`;
//       })
//       .join("")}
//   </table>
// `;

// let colorClick = document.getElementsByClassName("click");
// console.log("Color Click: ", colorClick);
// for (let i = 0; i < colorClick.length; i++) {
//   colorClick[i].style.backgroundColor = "red";
//   console.log("Click", colorClick[i]);
// }
// let styleChange = (colorClick.style = "color: red");
// colorClick.onclick = console.log("Clicked row");

/* <th>NBA</th>
          <th>MLB</th> */
//  ${st.nba.map(game => {
// return `<tr><td>${game.strEvent}</td><td>${game.strEvent}</td><td>${game.strEvent}</td></tr>`;
// })}
// ${st.mlb.map(game => {
// return `<tr><td>${game.strEvent}</td><td>${game.strEvent}</td><td>${game.strEvent}</td></tr>`;
// })}
