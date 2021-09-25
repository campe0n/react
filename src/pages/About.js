import "../index.css";
import photo from "../images/IMG_0105.JPG";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="deck">
      <h2>About Me</h2>
      <p>Hello, My name is Melvin. I'm a full stack developer.</p>
      <Button
        title="Resume"
        link="https://docs.google.com/document/d/1dEwpWTU8VqY4C4BWRzPRXOhu0LFvUBBHiBNM6pmde5Q/edit# "
      />
      <img src={photo} alt="Melvin Finn" id="selfie"></img>
    </div>
  );
}
