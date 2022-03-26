import html from "html-literal";
import SportState from "../../store/Sports.js";
export default () => html`
  <section id="events">
    <header><h2>Select Events</h2></header>
    <table id="test" style="width:100%">
      <tr class="center">
        <th>NFL</th>
        <th>NBA</th>
        <th>MLB</th>
      </tr>
      <tr class="center">
        <td>${SportState.nfl.description}</td>
        <td>${SportState.nba.description}</td>
        <td>${SportState.mlb.description}</td>
      </tr>
    </table>
  </section>
`;
