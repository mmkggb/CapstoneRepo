import html from "html-literal";
// import SportState from "../../store/Sports.js";

export default st => html`
  <section id="events">
    <h2>Select Events</h2>
    <p class="pCenter">View Todays NFL Games</p>
    <table id="nfl" class="tabCent" style="width:50%">
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
          return `<tr><div><td><a href="https://www.google.com/">${game.strEvent}</a></td>
          </div><br><td>${game.dateEvent}</td></tr>`;
        })}
      </tbody>
    </table>
    <p class="pCenter pTabSpc">View Todays NBA Games</p>
    <table id="nba" class="tabCent" style="width:50%">
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
    <p class="pCenter pTabSpc">View Todays MLB Games</p>
    <table id="mlb" class="tabCent" style="width:50%">
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
  <section id="confirmed">
    <form id="confirmed" method="POST" action="">
      <h2>Confirm Event</h2>
      <div>
        <label for="sport">Sport:</label>
        <select id="sport" name="sport">
          <option value="">Select Sport</option>
          <option value="thin">Football</option>
          <option value="chicago">Basketball</option>
          <option value="deep-dish">Baseball</option>
        </select>
      </div>
      <div>
        <label for="league">League:</label>
        <select id="league" name="league">
          <option value="">Select League</option>
          <option value="nfl">NFL</option>
          <option value="nba">NBA</option>
          <option value="mlb">MLB</option>
        </select>
      </div>
      <div>
        <label for="event">Event:</label>
        <input
          type="text"
          name="event"
          id="event"
          placeholder="Enter Event"
          required
        />
      </div>
      <div>
        <label for="place">Broadcast Location:</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="locations"
          name="place"
          value="Place"
        />
        <label for="top1">Hooters</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="locations"
          name="place"
          value="Place1"
        />
        <label for="top2">Applebees</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="locations"
          name="place"
          value="Place2"
        />
        <label for="top3">TGI Fridays</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="locations"
          name="place"
          value="Place3"
        />
        <label for="top4">Happiest Hour</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="place"
          value="Place4"
        />
        <label for="top5">Buffalo Wild Wings</label>
      </div>
      <input type="submit" name="submit" value="Confirm Event" />
    </form>
  </section>
`;
