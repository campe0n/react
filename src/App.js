import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Header />
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
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
