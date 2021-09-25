import "../index.css";

import holidaySearch from "../images/holidaysearch.PNG";
import eventPlanning from "../images/eventplanning.PNG";
import workdayscheduler from "../images/workdayscheduler.PNG";
import ProjectImage from "../components/ProjectImage";
import Button from "../components/Button";

export default function Project({ title, src, link }) {
  return (
    <div className="deck">
      <h2>My projects</h2>
      <div id="projectContainer">
        <ProjectImage
          title="Holiday Search"
          src={holidaySearch}
          githubLink=" https://github.com/gannacon/Project_1"
          appLink="https://gannacon.github.io/Project_1/"
        />
        <ProjectImage
          title="The Event Planning"
          src={eventPlanning}
          githubLink="https://github.com/brownnicholasj/the-event-planning "
          appLink="https://the-event-planning.herokuapp.com/"
        />
        <ProjectImage
          title="Workday Scheduler"
          src={workdayscheduler}
          githubLink="https://github.com/campe1n/dplanner_mf"
          appLink="https://campe0n.github.io/dplanner_mf/"
        />
      </div>
    </div>
  );
}
