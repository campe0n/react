import "../index.css";

export default function Contact() {
  return (
    <div class="deck">
      <h2>Contact Me</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text"></input>
        <label for="email">Email:</label>
        <input type="text"></input>
        <label for="message">Message:</label>
        <textarea></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
