import html from "html-literal";
// import SportState from "../../store/Sports.js";

export default st => html`
  <section id="events">
    <header><h2>Select Events</h2></header>
    <p>View Todays NFL Games</p>
    <table id="test">
      <thead>
        <tr>
          <th colspan="2">NFL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Game</td>
          <td>Date</td>
        </tr>
        ${st.nfl.map(game => {
          return `<tr><td>${game.strEvent}</td><br><td>${game.dateEvent}</td></tr>`;
        })}
      </tbody>
    </table>
    <p>View Todays NBA Games</p>
    <table id="test" style="width:100%">
      <thead>
        <tr>
          <th colspan="2">NBA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Game</td>
          <td>Date</td>
        </tr>
        ${st.nba.map(game => {
          return `<tr><td>${game.strEvent}</td><br><td>${game.dateEvent}</td></tr>`;
        })}
      </tbody>
    </table>
    <p>View Todays MLB Games</p>
    <table id="test" style="width:100%">
      <thead>
        <tr>
          <th colspan="2">MLB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Game</td>
          <td>Date</td>
        </tr>
        ${st.mlb.map(game => {
          return `<tr><td>${game.strEvent}</td><br><td>${game.dateEvent}</td></tr>`;
        })}
      </tbody>
    </table>
  </section>
`;
