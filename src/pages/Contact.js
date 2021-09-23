import "../index.css";
import githubLogo from "../images/githublogo.png";
import linkedInLogo from "../images/linkedInLogo.png";

export default function Contact() {
  return (
    <div class="deck">
      <h2>Contact Me</h2>
      <h3>Email</h3>
      <p>melvinrf@outlook.com</p>
      <div>
        <a href="https://github.com/campe0n">
          <img src={githubLogo} alt="Github Button" />
        </a>
        <a href="https://www.linkedin.com/in/melvin-finn-00a910206/">
          <img src={linkedInLogo} alt="Linked In Button" />
        </a>
      </div>
    </div>
  );
}
