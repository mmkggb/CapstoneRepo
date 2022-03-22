import html from "html-literal";

export default () => html`
  <section id="contact_us">
    <header>
      <h3>Were here for you</h3>
    </header>
    <p>Leave a message and your contact information</p>
    <p>Were open to discussion, suggestions, and business inquiries</p>
    <form action="https://formspree.io/f/mwkyqjkb" method="POST">
      <label>
        Your email:
        <input type="email" name="email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      <!-- your other form fields go here -->
      <button type="submit">Send</button>
    </form>
  </section>
`;
