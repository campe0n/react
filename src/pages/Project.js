import "../index.css";

import holidaySearch from "../images/holidaysearch.PNG";
import eventPlanning from "../images/eventplanning.PNG";
import workdayscheduler from "../images/workdayscheduler.PNG";

export default function Project() {
  return (
    <div class="deck">
      <h2>My projects</h2>
      <div class="imgContainer">
        <p>Click on the images to be taken to the github page</p>
        <div class="overlay">
          <div class="imgOverlay">
            <a
              href="https://github.com/gannacon/Project_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={holidaySearch} alt="Holiday Serach Project" />
            </a>
          </div>
        </div>
        <p>
          Holiday Search was the first project I worked on for my bootcamp. The
          objective was to create an application that utilizes an api.
        </p>
        <a href="https://gannacon.github.io/Project_1/" class="link">
          Link to application
        </a>
        <div class="overlay">
          <div class="imgOverlay">
            <a
              href="https://github.com/brownnicholasj/the-event-planning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={eventPlanning} alt="Event Planning Project" />
            </a>
          </div>
        </div>
        <p>
          The Event Planning Site is an application that allows users to store
          information for planning an event, but also stores information about
          guests should the host need them later. I worked the front end for
          this project.
        </p>
        <a href="https://the-event-planning.herokuapp.com/" class="link">
          Link to application
        </a>
        <div class="overlay">
          <div class="imgOverlay">
            <a
              href="https://github.com/campe0n/dplanner_mf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={workdayscheduler} alt="Worday Scheduler Project" />
            </a>
          </div>
        </div>
        <p>
          Work Day Scheduler allows users to manage their day by keeping track
          of events throught the day.
        </p>
        <a href="https://campe0n.github.io/dplanner_mf/" class="link">
          Link to application
        </a>
      </div>
    </div>
  );
}
