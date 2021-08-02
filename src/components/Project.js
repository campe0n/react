import holidaySearch from "../images/holidaysearch.PNG";
import eventPlanning from "../images/eventplanning.PNG";
import workdayscheduler from "../images/workdayscheduler.PNG";

export default function Project() {
  return (
    <div>
      <h2>Projects</h2>
      <p className="sub">
        Click on the project images to go to the github page.
      </p>
      <h3>Holiday Search</h3>
      <a
        href="https://github.com/gannacon/Project_1"
        class="projectImage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={holidaySearch} alt="Image of holiday search." />
      </a>
      <p>
        Holiday search is a web application that enables users to search for
        holidays on a specific day.
      </p>
      <a href="https://gannacon.github.io/Project_1/" className="url">
        Link to Holiday Search
      </a>
      <h3>The Event Planning Site</h3>
      <a
        href="https://github.com/brownnicholasj/the-event-planning"
        class="projectImage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={eventPlanning} alt="Image of event planning." />
      </a>
      <p>
        The event planning site enables users to create and manage several
        aspects of hosting an event.
      </p>
      <a href="https://the-event-planning.herokuapp.com/" className="url">
        Link to The Event Planning Site
      </a>
      <h3>Day Scheduler</h3>
      <a
        href="https://github.com/campe0n/dplanner_mf"
        class="projectImage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={workdayscheduler} alt="Image of work day scheduler." />
      </a>
      <p>
        Day scheduler enables users to create and manage tasks throughout the
        day.
      </p>
      <a href="https://campe0n.github.io/dplanner_mf/" className="url">
        Link to Day Scheduler
      </a>
    </div>
  );
}
