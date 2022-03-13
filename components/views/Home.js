import html from "html-literal";
import Map from "../../assets/img/Map.png";
export default () => html`<main>
<p>Welcome To Game Day Nation where sports fans all alike come here to check sporting events  listed in their local radius sports bar grill restaurants
</p>

<div id="main-mid"><p class="main-mid"><br>Q:</br> So how does your application make my life easier? <br>A:</br> It's simple, before you and your buds head out or call every sports bar number in town just use our web app to query your game details and receive instant feedback on area locations with the broadcast confirmed.
</p>
<p class="main-mid"> Its as simple as 1, 2, 3!! When we want to watch a box office movie at the theater we simply do a search on the theater's website and get the show times of our desired movie. We should have the same convenience as sports fans and bar goers, well our moment is finally here friends!
</p></div>
<p id="startBttn" alt='convert to button'>Get Started</p>
<img src="${Map}" alt="Map Location" id="locationPreview"/>

</main>`;
