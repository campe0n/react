import Button from "../components/Button";
import githubLogo from "../images/githublogo.png";

import "../index.css";

export default function ProjectImage({ title, appLink, githubLink, src }) {
  return (
    <div id="imgContainer">
      <h2>{title}</h2>
      <img src={src} alt={title}></img>
      <div id="btnContainer">
        <Button title="Github" link={githubLink} />
        <Button title="Application" link={appLink} />
      </div>
    </div>
  );
}
