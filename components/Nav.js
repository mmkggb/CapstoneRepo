import html from "html-literal";

export default links => html`
  <section class="nav">
    <nav>
      <i class="fas fa-baseball-ball"></i>
      <ul class="hide--mobile" id="navbar">
        ${links.map(
          el =>
            `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
        )}
      </ul>
    </nav>
  </section>
`;
