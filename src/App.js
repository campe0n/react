import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Button from "./components/Button";

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
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </section>
      <footer>
        <a href="https://github.com/campe0n" className="fBtn">
          <Button text="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/melvin-finn-00a910206/"
          className="fBtn"
        >
          <Button text="LinkedIn" />
        </a>
      </footer>
    </Router>
  );
}

export default App;
