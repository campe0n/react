import "../index.css";
import githubLogo from "../images/githublogo.png";
import linkedInLogo from "../images/linkedInLogo.png";

const styles = {
  a: {
    margin: "0 auto",
  },
  img: {
    marign: "0 auto",
    height: "10%",
    widht: "10%",
  },
  logoContainer: {
    display: "flex",
    justityContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

export default function Contact() {
  return (
    <div class="deck">
      <h2>Contact Me</h2>
      <h3>Email</h3>
      <p>melvinrf@outlook.com</p>
      <div style={styles.logoContainer}>
        <a href="https://github.com/campe0n">
          <img src={githubLogo} style={styles.img} alt="Github Button" />
        </a>
        <a href="https://www.linkedin.com/in/melvin-finn-00a910206/">
          <img src={linkedInLogo} style={styles.img} alt="Linked In Button" />
        </a>
      </div>
    </div>
  );
}
