import Button from "../components/Button";
import githubLogo from "../images/githublogo.png";

import "../index.css";

export default function ProjectImage({ title, appLink, githubLink, src }) {
  return (
    <div id="imgContainer">
      <img src={src} alt={title}></img>
      <div id="btnContainer">
        <Button
          title="Button to Github"
          link={githubLink}
          image={githubLogo}
          text="Github"
        />
        <Button
          title="Button to Application"
          link={appLink}
          image={githubLogo}
          text="Application"
        />
      </div>
    </div>
  );
}
