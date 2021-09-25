import "./index.css";
import About from "./pages/About";
import Project from "./pages/Project";
import Nav from "./components/Nav";
import Icon from "./components/Icon";
import Contact from "./pages/Contact";
import githubLogo from "./images/githublogo.png";
import linkedInLogo from "./images/linkedInLogo.png";
import Resume from "./pages/Resume";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <h1>Melvin Finn</h1>
        <Nav />
      </header>
      <section>
        <Switch>
          <Route path="/react" component={About} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </section>
      <footer>
        <Icon
          title="Github"
          image={githubLogo}
          link="https://github.com/campe0n"
        />
        <Icon
          title="LinkedIn"
          image={linkedInLogo}
          link="www.linkedin.com/in/melvinfinn"
        />
      </footer>
    </Router>
  );
}

export default App;
