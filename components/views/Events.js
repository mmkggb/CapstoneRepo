import html from "html-literal";
// import SportState from "../../store/Sports.js";
export default st => html`
  <section id="events">
    <header><h2>Select Events</h2></header>
    <table id="test" style="width:100%">
      <tr>
        <th>NFL</th>
        <th>NBA</th>
        <th>MLB</th>
      </tr>
      ${st.nba
        .map(game => {
          return `<tr><td>${game.strEvent}</td></tr><tr><td>${game.strEvent}</td></tr><tr><td>${game.strEvent}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
