import "../index.css";

import holidaySearch from "../images/holidaysearch.PNG";
import eventPlanning from "../images/eventplanning.PNG";
import workdayscheduler from "../images/workdayscheduler.PNG";

export default function Project() {
  return (
    <div class="deck">
      <h2>My projects</h2>
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
    </div>
  );
}
